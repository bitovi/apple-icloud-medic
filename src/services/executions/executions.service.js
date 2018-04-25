const createService = require('../es-base-adapter');
const hooks = require('./executions.hooks');
const filters = require('./executions.filters');
const { API_BASE_URI } = require('../../../shared/env');

module.exports = function () {
  const app = this;
  const client = app.get('elasticsearchClient');
  const utilService = app.service(`${API_BASE_URI}/elasticsearch-util`);
  const paginate = app.get('paginate');

  const options = {
    name: 'executions',
    Model: client,
    paginate,
    utilService,
    elasticsearch: {
      // This data is sent with each request to elasticsearch.
      // DO NOT set "index" here - every team has its own index and
      // that value is set per-request (see the es-base-adapter)
      type: 'executions'
    }
  };

  const location = `${API_BASE_URI}/executions`;
  // Initialize our service with any options it requires
  app.use(location, createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service(location);

  service.hooks(hooks);
  service.filter(filters);
};
