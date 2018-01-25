// Initializes the `team` service on path `/teams`
const createService = require('feathers-sequelize');
const createModel = require('../../models/teams.model');
const hooks = require('./teams.hooks');
const filters = require('./teams.filters');
const env = require('../../../shared/env');

module.exports = function () {
  const app = this;
  const Model = createModel(app);

  const options = {
    name: 'teams',
    Model
  };

  const location = `${env.API_BASE_URI}/teams`;

  // Initialize our service with any options it requires
  app.use(location, createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service(location);

  service.hooks(hooks);
  service.filter(filters);
};
