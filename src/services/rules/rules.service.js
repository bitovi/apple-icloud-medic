// Initializes the `rules` service on path `/rules`
const createService = require('feathers-sequelize');
const createModel = require('../../models/rules.model');
const env = require('../../../shared/env');
const hooks = require('./rules.hooks');
const filters = require('./rules.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'rules',
    Model,
    paginate
  };

  const location = `${env.API_BASE_URI}/rules`;
  // Initialize our service with any options it requires
  app.use(location, createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service(location);

  service.hooks(hooks);
  service.filter(filters);
};
