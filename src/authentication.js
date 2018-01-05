const authentication = require('feathers-authentication');
const custom = require('feathers-authentication-custom');
const jwt = require('feathers-authentication-jwt');
const cookie = require('cookie');
const CustomVerifier = require('./util/custom-auth-verifier.js');
const debug = require('debug')('medic:auth');

module.exports = function () {
  const app = this;
  const authConfig = app.get('authentication');

  const oldSetup = app.setup;
  app.setup = function (...args) {
    const result = oldSetup.apply(this, args);

    // This is required for cookie validation
    app.io.use((socket, next) => {
      debug('Socket middleware');
      const headers = socket.handshake.headers;
      if (headers && headers.cookie) {
        const cookies = cookie.parse(headers.cookie);
        const connection = socket.conn;
        Object.assign(socket.feathers, { headers, cookies, connection });
      }
      next();
    });

    return result;
  };

  // This is required for auth cookie validation
  app.use((req, res, next) => {
    debug('REST middleware');
    req.feathers.connection = req.connection;
    next();
  });

  // Set up authentication with the secret
  app.configure(authentication(authConfig));
  app.configure(custom({ Verifier: CustomVerifier }));
  app.configure(jwt());

  // The `authentication` service is used to create a JWT.
  app.service('authentication').hooks({
    before: {
      create: [
        (hook) => {
          // Always require custom strategy when _creating_ a session.
          // This is needed because of socket reconnection/re-authentication,
          // where it attempts to use the existing JWT. This enforces a policy
          // of re-authenticating users against DS on every socket connection.
          debug('Creating new session to be verified against Directory Services');
          hook.data = { strategy: 'custom' };
          return hook;
        },
        // performs the actual authentication
        authentication.hooks.authenticate('custom'),
        (hook) => {
          // The user service is an in-memory service. We need to create the user
          // in memory and then attach the userId to the JWT payload.
          debug('Creating user on users service', hook.params.user);
          const userSvc = app.service(authConfig.service);
          return userSvc.create(hook.params.user).then(result => {
            debug('Decorating auth payload with userID', result);
            // `hook.params.payload` is a special property which will be appended
            // to the JWT claim. Do not put the user in the payload!!
            hook.params.payload = hook.params.payload || {};
            Object.assign(hook.params.payload, { userId: hook.params.user[userSvc.id] });
          });
        }
      ],
      remove: [
        authentication.hooks.authenticate('jwt')
      ]
    },
    after: {
      create: [
        (hook) => {
          // This makes the user available on the auth response so we don't have
          // to request it separately. This is NOT part of the JWT claim.
          hook.result.user = hook.params.user;
          return hook;
        }
      ],
      remove: []
    }
  });
};
