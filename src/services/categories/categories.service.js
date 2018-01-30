// Initializes the `categories` service on path `/categories`
const createService = require('feathers-sequelize');
const createModel = require('../../models/categories.model');
const hooks = require('./categories.hooks');
const filters = require('./categories.filters');
const env = require('../../../shared/env');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'categories',
    Model,
    paginate
  };

  const location = `${env.API_BASE_URI}/categories`;
  // Initialize our service with any options it requires
  app.use(location, createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service(location);

  service.hooks(hooks);
  service.filter(filters);
};
