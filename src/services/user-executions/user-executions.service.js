// Initializes the `user-executions` service on path `/user-executions`
const createService = require('feathers-sequelize');
const approvalService = require('./approval/approval.service');
const env = require('../../../shared/env');
const createModel = require('../../models/user-executions.model');
const hooks = require('./user-executions.hooks');
const filters = require('./user-executions.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'user-executions',
    Model,
    paginate
  };

  const location = `${env.API_BASE_URI}/user-executions`;
  // Initialize our service with any options it requires
  app.use(location, createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service(location);

  service.hooks(hooks);
  service.filter(filters);

  // configure nested services
  app.configure(approvalService);
};
