// Initializes the `team-members` service on path `/team-members`
const createService = require('./team-members.class.js');
const hooks = require('./team-members.hooks');
const filters = require('./team-members.filters');
const { API_BASE_URI } = require('../../../shared/env');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');
  const dsConfig = app.get('ds');

  const options =  Object.assign({
    name: 'team-members',
    paginate
  }, dsConfig, {
    apiPath: '/service/grpservice/fetchGroupMember'
  });

  // Initialize our service with any options it requires
  const location = `${API_BASE_URI}/team-members`;
  app.use(location, createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service(location);

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
