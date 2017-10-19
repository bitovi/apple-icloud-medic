const { authenticate } = require('feathers-authentication').hooks;
const errors = require('feathers-errors');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [(hook) => {
      if (hook.id === 'me' || hook.id === hook.params.user.email) {
        hook.result = hook.params.user;
        return hook;
      }
      throw new errors.Forbidden('You do not have permission to load other users.');
    }],
    create: [],
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
