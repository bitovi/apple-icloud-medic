const debug = require('debug')('medic:hooks:sync-group-member-data');
const errors = require('feathers-errors');
const { API_BASE_URI } = require('../../shared/env');

/**
 * This is intended to be use as an "after" hook for services whose
 * data contains a reference to Directory Services users:
 *
 *  - team-members
 *  - project-contributors
 *
 * This module loads all members for a Directory Services group
 * and syncs it with medic data stores. It is expected that the
 * medic data store has a single column for storing a reference
 * to the Directory Serives User ID. Once the data is sync'd, the
 * user object is expanded onto the `hook.result` data.
 *
 *  - Any new members are created.
 *  - Any orphaned members are deleted.
 */
const syncGroupMemberData = (options) => {
  options = Object.assign({
    /** The property which references DS user IDs */
    idProp: 'personId',
    /** Whether or not new member data should be created */
    createNewAssociations: true,
    /** Whether or not orphaned member data should be deleted */
    deleteOrphanedAssociations: true,
    createAssociationObj(personId/*, hook */) {
      return { [options.idProp]: personId, permissions: 'ro-user'};
    },
    createDeleteQuery(orphanedIds/*, hook */) {
      return { [options.idProp]: { $in: orphanedIds } };
    }
  }, options);

  return (hook) => {
    const teamId = hook.params.query.teamId || hook.params.teamId;

    if (hook.type !== 'after') {
      return Promise.reject(new Error('The syncGroupMemberData hook can only be used as an after hook'));
    }

    if (!teamId) {
      return Promise.reject(new errors.BadRequest('teamId required to sync group members'));
    }

    if (hook.result.data) {
      return Promise.reject(new Error('The syncGroupMemberData is not intended for paginated data.'));
    }

    // Make an array for consistent handling. We change this back at the end.
    const isSingleItem = !Array.isArray(hook.result);
    let hookData = isSingleItem ? [hook.result] : hook.result;

    if (!hookData.length && !options.createNewAssociations) {
      return hook;
    }

    // Check the first object for the idProp (we assume all items are the same type)
    if (hookData.length && !hookData[0].hasOwnProperty(options.idProp)) {
      return Promise.reject(new Error(`The data does not contain the required '${options.idProp}' property.`));
    }

    const knownMemberIds = hookData.reduce((map, member) => {
      // We use the value to determine orphaned members (see code below)
      map[ member[options.idProp] ] = false;
      return map;
    }, {});

    const groupMembersSvc = hook.app.service(`${API_BASE_URI}/group-members`);
    return groupMembersSvc.find({ query: { teamId }}).then(groupMembers => {
      debug('Loaded', groupMembers.length, 'members');
      // [0] = new members, [1] = removed members
      const promises = [null, null];

      // 1. Determine any new and existing members
      const newMembers = groupMembers.reduce((arr, member) => {
        if (knownMemberIds.hasOwnProperty(member.personId)) {
          // Mark the team member as "found" so that we can determine
          // orphaned members in the next step.
          knownMemberIds[member.personId] = true;
        } else if (options.createNewAssociations) {
          arr.push(options.createAssociationObj(member.personId, hook));
        }
        return arr;
      }, []);

      if (options.createNewAssociations && newMembers.length) {
        promises[0] = hook.service.create(newMembers);
      }

      // 2. Determine any orphaned member IDs (anybody not "found" in the previous step)
      let orphanedIds = [];
      if (options.deleteOrphanedAssociations) {
        orphanedIds = Object.keys(knownMemberIds).filter(id => knownMemberIds[id] === false);

        if (orphanedIds.length) {
          promises[1] = hook.service.remove(null, {
            query: options.createDeleteQuery(orphanedIds, hook)
          });
        }
      }

      return Promise.all(promises).then(([added, removed]) => {
        if (removed && removed.length) {
          hookData = hookData.filter(member => orphanedIds.indexOf(member[options.idProp]) === -1);
        }
        if (added && added.length){
          hookData = hookData.concat(added);
        }
        // create a map of IDs => group members - prevents n^2 iterations
        const groupMemberMap = groupMembers.reduce((map, member) => {
          map[member.personId] = member;
          return map;
        }, {});

        // finally, expand the group member as the "user" property
        hookData.forEach(member => {
          member.user = groupMemberMap[ member[options.idProp] ];
        });

        hook.result = isSingleItem ? hookData[0] : hookData;

        return hook;
      });
    });
  };
};

module.exports = syncGroupMemberData;
