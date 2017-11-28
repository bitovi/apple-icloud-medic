const env = require('../../../../shared/env');
const createService = require('./approval.class');
const hooks = require('./approval.hooks');

module.exports = function () {
  const app = this;
  const ssConfig = app.get('stackstorm');

  const options = Object.assign({
    name: 'execution-approval'
  }, ssConfig, {
    apiPath: '/api/v1/executions'
  });

  const location = `${env.API_BASE_URI}/user-executions/:userExecutionId/approval`;
  app.use(location, createService(options));

  const service = app.service(location);

  service.hooks(hooks);
};
