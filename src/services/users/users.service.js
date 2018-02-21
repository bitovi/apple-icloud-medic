// Initializes the `users` service on path `/users`
const createService = require('feathers-memory');
const env = require('../../../shared/env');
const hooks = require('./users.hooks');
const filters = require('./users.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');

  const options = {
    id: 'prsId',
    name: 'users',
    paginate
  };

  const location = `${env.API_BASE_URI}/users`;

  // Initialize our service with any options it requires
  app.use(location, createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service(location);

  service.hooks(hooks);
  service.filter(filters);
};
