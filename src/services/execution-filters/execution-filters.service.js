const env = require('../../../shared/env');
const createService = require('./execution-filters.class');
const hooks = require('./execution-filters.hooks');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');
  const ssConfig = app.get('stackstorm');

  const options = Object.assign({
    name: 'execution-filters',
    paginate
  }, ssConfig, {
    apiPath: '/api/v1/executions/views/filters'
  });

  const location = `${env.API_BASE_URI}/execution-filters`;
  app.use(location, createService(options));

  const service = app.service(location);

  service.hooks(hooks);
};
