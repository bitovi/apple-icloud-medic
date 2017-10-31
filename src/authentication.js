const authentication = require('feathers-authentication');
const custom = require('feathers-authentication-custom');
const jwt = require('feathers-authentication-jwt');
const CustomVerifier = require('./util/custom-auth-verifier.js');

module.exports = function () {
  const app = this;
  const authConfig = app.get('authentication');

  // Set up authentication with the secret
  app.configure(authentication(authConfig));
  app.configure(custom({ Verifier: CustomVerifier }));
  app.configure(jwt());

  // The `authentication` service is used to create a JWT.
  app.service('authentication').hooks({
    before: {
      create: [
        authentication.hooks.authenticate(authConfig.strategies),
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
