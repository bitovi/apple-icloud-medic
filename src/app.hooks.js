// Application hooks that run for every service
const authentication = require('feathers-authentication');
const { iff } = require('feathers-hooks-common');
const logger = require('./hooks/logger');
const checkPermissions = require('./hooks/permission-check');

const shouldAuthenticate = (hook) => {
  const authConfig = hook.app.get('authentication');
  const authService = hook.app.service(authConfig.path);
  return (
    hook.params.provider &&
    hook.service !== authService
  );
};

const shouldCheckPermissions = (hook) => {
  const authConfig = hook.app.get('authentication');
  const svcConfig = hook.service.config || hook.service;
  const authService = hook.app.service(authConfig.path);
  const userService = hook.app.service(authConfig.service);

  return (
    // provider is set for REST/socket (not internal service calls)
    hook.params.provider &&
    svcConfig.skipGlobalPermissionCheck !== true &&
    hook.service !== authService &&
    hook.service !== userService
  );
};

module.exports = {
  before: {
    all: [
      iff(shouldAuthenticate, [
        authentication.hooks.authenticate('jwt')
      ]),
      iff(shouldCheckPermissions, [
        checkPermissions()
      ])
    ]
  },

  after: {
    all: []
  },

  error: {
    all: [ logger() ]
  }
};
