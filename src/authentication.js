const authentication = require('feathers-authentication');
const custom = require('feathers-authentication-custom');
const jwt = require('feathers-authentication-jwt');
const CustomVerifier = require('./util/custom-auth-verifier.js');

module.exports = function () {
  const app = this;
  const authConfig = app.get('authentication');

  // TODO: This should not be needed (see "verify" method above)
  // Expose the "connection" so we can access it later
  // https://github.com/feathersjs/feathers-authentication/issues/494
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
        authentication.hooks.authenticate(authConfig.strategies)
      ],
      remove: [
        authentication.hooks.authenticate('jwt')
      ]
    },
    after: {
      create: [],
      remove: []
    }
  });
};
