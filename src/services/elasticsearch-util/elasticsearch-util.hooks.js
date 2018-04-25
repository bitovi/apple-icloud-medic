const { Forbidden } = require('feathers-errors');
const { iff } = require('feathers-hooks-common');
const { API_BASE_URI } = require('../../../shared/env');

const requiresPermissions = (hook) => {
  if (hook.method === 'get') {
    // syncing doesn't require permissions
    if (hook.id === 'sync-executions') return false;
  }
  return true;
};

const permissionCheck = (hook) => {
  // Only super admins can do stuff here
  if (hook.params.provider && (!hook.params.user || !hook.params.user.isSuperAdmin)) {
    return Promise.reject(new Forbidden('Insufficient permissions'));
  }
};

const exposeOtherServices = (hook) => {
  // Make other services available
  Object.assign(hook.params, {
    executionsService: hook.app.service(`${API_BASE_URI}/executions`),
    st2executionsService: hook.app.service(`${API_BASE_URI}/st2-executions`),
  });
  return hook;
};

module.exports = {
  before: {
    all: [
      iff(requiresPermissions, [permissionCheck]),
      exposeOtherServices
    ],
    get: [],
    update: [],
    remove: []
  },

  after: {
    all: [],
    get: [],
    update: [],
    remove: []
  },

  error: {
    all: [],
    get: [],
    update: [],
    remove: []
  }
};
