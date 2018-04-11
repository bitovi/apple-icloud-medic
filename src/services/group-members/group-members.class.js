const DSBaseClient = require('../ds-base-client');
const { normalizePerson } = require('../../util/ds-helper');

// Normalize properties which come back from DS
// (eg. DS uses prsId, personId, or personID depending on context)
const PROP_MAP = {
  'personID': 'personId'
};

// simple cache until something better is needed
// groupId => Promise
const CACHE = {};
const CACHE_DURATION = 1000 * 60 * 10; // ms

class Service extends DSBaseClient {
  find (params) {
    return this.fetchMembersIterative(params);
  }

  /**
   * Iteratively fetches team members, loading members from nested groups.
   * @param  {Object}  params  A params object with a `query.groupId` property
   * @return {Promise}
   */
  fetchMembersIterative(params) {
    const { groupId } = params.query;
    if (CACHE[groupId] && (new Date() - CACHE[groupId]._timestamp) < CACHE_DURATION) {
      return CACHE[groupId];
    }

    CACHE[groupId] = this.request('POST', params).then(results => {
      const groupIds = [];
      const _results = [];

      // Differentiate between "persons" and "groups"
      results.groupMember.forEach(member => {
        if (member.groupMemberType === 1) {
          // Member is a person - normalize props for consistency
          const person = normalizePerson(member.personMember, PROP_MAP);
          _results.push(person);
        } else if (member.groupMemberType === 2) {
          // Member is a group - save ID for iteration
          groupIds.push(member.groupMember.groupID);
        }
      });
      // load data for nested groups
      if (groupIds.length) {
        const promises = groupIds.map(groupId => {
          return this.fetchMembersIterative({ query: { groupId }});
        });
        return Promise.all(promises).then(results => {
          // flatten results
          results.forEach(r => _results.push.apply(_results, r));
          return _results;
        });
      }
      return _results;
    }).then(results => {
      // Remove duplicates
      const ids = [];
      return results.filter(member => {
        if(ids[member.personId]) {
          return false;
        }
        return ids[member.personId] = true;
      });
    });

    CACHE[groupId].catch(() => {
      CACHE[groupId] = null;
    });

    CACHE[groupId]._timestamp = new Date();
    return CACHE[groupId];
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
