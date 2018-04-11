const requireQueryParams = require('../../hooks/require-query-params');
const syncGroupMemberData = require('../../hooks/sync-group-member-data');

const createDeleteQuery = (orphanedIds, hook) => {
  return {
    projectId: hook.params.query.projectId,
    personId: { $in: orphanedIds }
  };
};

module.exports = {
  before: {
    all: [],
    find: [
      // require clients to pass teamId - saves db queries
      requireQueryParams('projectId', 'teamId'),
      (hook) => {
        hook.params.teamId = hook.params.query.teamId;
        delete hook.params.query.teamId;
      }
    ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [syncGroupMemberData({
      createNewAssociations: false,
      createDeleteQuery
    })],
    get: [syncGroupMemberData({
      createNewAssociations: false,
      deleteOrphanedAssociations: false
    })],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
