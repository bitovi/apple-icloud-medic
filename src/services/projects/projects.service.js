// Initializes the `projects` service on path `/projects`
const createService = require('feathers-sequelize');
const createModel = require('../../models/projects.model');
const hooks = require('./projects.hooks');
const filters = require('./projects.filters');
const env = require('../../../shared/env');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'projects',
    Model,
    paginate
  };

  const location = `${env.API_BASE_URI}/projects`;
  // Initialize our service with any options it requires
  app.use(location, createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service(location);

  service.hooks(hooks);

  service.filter(filters);
};
