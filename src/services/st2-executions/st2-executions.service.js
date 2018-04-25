const env = require('../../../shared/env');
const createService = require('./st2-executions.class');
const hooks = require('./st2-executions.hooks');
const filters = require('./st2-executions.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');
  const ssConfig = app.get('stackstorm');

  const options = Object.assign({
    name: 'st2-executions',
    paginate
  }, ssConfig, {
    apiPath: '/api/v1/executions'
  });

  const location = `${env.API_BASE_URI}/st2-executions`;
  app.use(location, createService(options));

  const service = app.service(location);

  service.hooks(hooks);
  service.filter(filters);
};
