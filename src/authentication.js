const authentication = require('feathers-authentication');
const custom = require('feathers-authentication-custom');
const jwt = require('feathers-authentication-jwt');
const cookie = require('cookie');
const CustomVerifier = require('./util/custom-auth-verifier.js');
const debug = require('debug')('medic:auth');

module.exports = function () {
  const app = this;
  const authConfig = app.get('authentication');
  const DEFAULT_STRATEGY = 'custom';

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
          debug(`Creating new session using "${DEFAULT_STRATEGY}" strategy`);
          hook.data = { strategy: DEFAULT_STRATEGY };
          return hook;
        },
        // Perform the actual authentication
        authentication.hooks.authenticate(DEFAULT_STRATEGY),
        (hook) => {
          const userSvc = app.service(authConfig.service);
          debug('Adding User ID to auth payload', hook.params.user[userSvc.id]);
          // `hook.params.payload` is a special property which will be merged
          // with the JWT claim. Do NOT put the entire user in the payload (see below)!!
          hook.params.payload = Object.assign({}, hook.params.payload, {
            personId: hook.params.user[userSvc.id]
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
          // to request it separately. This data is NOT part of the JWT claim/payload.
          debug('Sending user with auth response', hook.params.user);
          hook.result.user = hook.params.user;
          return hook;
        }
      ],
      remove: []
    }
  });
};
