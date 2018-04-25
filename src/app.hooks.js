// Application hooks that run for every service
const debug = require('debug')('medic:auth:app-hooks');
const authentication = require('feathers-authentication');
const { iff } = require('feathers-hooks-common');
const logger = require('./hooks/logger');
const checkPermissions = require('./hooks/permission-check');

const shouldAuthenticate = (hook) => {
  const authConfig = hook.app.get('authentication');
  const svcConfig = hook.service.config || hook.service;
  const authService = hook.app.service(authConfig.path);

  // We don't want to authenticate the auth request itself
  return (
    // provider is set for REST/socket (not internal service calls)
    hook.params.provider &&
    hook.service !== authService &&
    svcConfig.skipAuthentication !== true
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
    hook.service !== authService &&
    hook.service !== userService &&
    svcConfig.skipGlobalPermissionCheck !== true
  );
};

module.exports = {
  before: {
    all: [
      iff(shouldAuthenticate, [
        (hook) => { debug(`${hook.method} ${hook.path} - Authenitcating request using JWT strategy`, hook.params); },
        authentication.hooks.authenticate('jwt'),
        (hook) => { debug(`${hook.method} ${hook.path} - JWT validated successfully`, hook.params); }
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
