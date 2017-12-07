const authentication = require('feathers-authentication');
const custom = require('feathers-authentication-custom');
const jwt = require('feathers-authentication-jwt');
const cookie = require('cookie');
const CustomVerifier = require('./util/custom-auth-verifier.js');

module.exports = function () {
  const app = this;
  const authConfig = app.get('authentication');

  const oldSetup = app.setup;
  app.setup = function (...args) {
    const result = oldSetup.apply(this, args);

    // This is required for cookie validation
    app.io.use((socket, next) => {
      console.log('Socket middleware');
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
          // Always require custom strategy when creating a session.
          // This is needed because of socket reconnection/re-authentication,
          // where it attempts to use the existing JWT.
          hook.data = { strategy: 'custom' };
          return hook;
        },
        authentication.hooks.authenticate('custom'),
        (hook) => {
          // make the user available for users service
          return app.service('users').create(hook.params.user).then(result => {
            // make sure params.payload exists
            hook.params.payload = hook.params.payload || {}
            // do not put the user in the payload!
            Object.assign(hook.params.payload, { userId: hook.params.user.email })
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
          // this makes the user available on the response so
          // we don't have request it separately
          hook.result.user = hook.params.user;
          return hook;
        }
      ],
      remove: []
    }
  });
};
