// Initializes the `group-members` service on path `/group-members`
const createService = require('./group-members.class.js');
const hooks = require('./group-members.hooks');
const filters = require('./group-members.filters');
const { API_BASE_URI } = require('../../../shared/env');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');
  const dsConfig = app.get('ds');

  const options =  Object.assign({
    name: 'group-members',
    paginate
  }, dsConfig, {
    apiPath: '/service/grpservice/fetchGroupMember'
  });

  // Initialize our service with any options it requires
  const location = `${API_BASE_URI}/group-members`;
  app.use(location, createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service(location);

  service.hooks(hooks);
  service.filter(filters);
};
