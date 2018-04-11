const requireQueryParams = require('../../hooks/require-query-params');
const syncGroupMemberData = require('../../hooks/sync-group-member-data');

const DEFAULT_PERMISSIONS= 'ro-user';

const createAssociationObj = (personId, hook) => {
  return {
    teamId: hook.params.query.teamId,
    personId: personId,
    permissions: DEFAULT_PERMISSIONS
  };
};

const createDeleteQuery = (orphanedIds, hook) => {
  return {
    teamId: hook.params.query.teamId,
    personId: { $in: orphanedIds }
  };
};

module.exports = {
  before: {
    all: [],
    find: [requireQueryParams('teamId')],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [syncGroupMemberData({
      createAssociationObj,
      createDeleteQuery
    })],
    get: [],
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
