// Initializes the `team-members` service on path `/team-members`
const createService = require('feathers-sequelize');
const createModel = require('../../models/team-members.model');
const hooks = require('./team-members.hooks');
const filters = require('./team-members.filters');
const { API_BASE_URI } = require('../../../shared/env');

module.exports = function () {
  const app = this;
  const Model = createModel(app);

  const options = {
    name: 'team-members',
    Model
    // do not paginate
  };

  const location = `${API_BASE_URI}/team-members`;
  app.use(location, createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service(location);

  service.hooks(hooks);
  service.filter(filters);
};
