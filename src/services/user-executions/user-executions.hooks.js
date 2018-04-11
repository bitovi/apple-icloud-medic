const errors = require('feathers-errors');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [(hook) => {
      if (!hook.data.userEmail && (!hook.data.groupIds || !hook.data.groupIds.length)) {
        throw new errors.BadRequest('Must pass at least one User Id or Group ID for approving this execution.');
      }
      return hook;
    }],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
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
