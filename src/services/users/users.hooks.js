const errors = require('feathers-errors');
const decoratePermissions = require('../../hooks/permission-decorator');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [(hook) => {
      if (hook.params.provider) {
        if (hook.params.user && (hook.id === 'me' || hook.id === hook.params.user.personId)) {
          hook.result = hook.params.user;
          return hook;
        }
        throw new errors.Forbidden('You do not have permission to load other users.');
      }
    }],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [decoratePermissions({ getUserFrom: 'result' })],
    create: [decoratePermissions({ getUserFrom: 'result' })],
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
