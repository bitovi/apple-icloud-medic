// Initializes the `roles` service on path `/roles`
const createService = require('feathers-sequelize');
const createModel = require('../../models/roles.model');
const hooks = require('./roles.hooks');
const filters = require('./roles.filters');
const env = require('../../../shared/env');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'roles',
    Model,
    paginate
  };

  const location = `${env.API_BASE_URI}/roles`;
  // Initialize our service with any options it requires
  app.use(location, createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service(location);

  service.hooks(hooks);
  service.filter(filters);
};
