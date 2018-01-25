const env = require('../../../shared/env');
const createService = require('./executions.class');
const hooks = require('./executions.hooks');
const filters = require('./executions.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');
  const ssConfig = app.get('stackstorm');

  const options = Object.assign({
    name: 'executions',
    paginate
  }, ssConfig, {
    apiPath: '/api/v1/executions'
  });

  const location = `${env.API_BASE_URI}/executions`;
  app.use(location, createService(options));

  const service = app.service(location);

  service.hooks(hooks);
  service.filter(filters);
};
