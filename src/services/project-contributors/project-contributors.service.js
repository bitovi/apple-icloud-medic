// Initializes the `project-contributors` service on path `/project-contributors`
const createService = require('feathers-sequelize');
const createModel = require('../../models/project-contributors.model');
const hooks = require('./project-contributors.hooks');
const filters = require('./project-contributors.filters');
const env = require('../../../shared/env');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'project-contributors',
    Model,
    paginate
  };

  const location = `${env.API_BASE_URI}/project-contributors`;
  // Initialize our service with any options it requires
  app.use(location, createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service(location);

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
