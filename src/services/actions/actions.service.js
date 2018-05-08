const env = require('../../../shared/env');
const createService = require('./actions.class');
const hooks = require('./actions.hooks');
const filters = require('./actions.filters');

module.exports = function () {
  const app = this;
  const ssConfig = app.get('stackstorm');

  const options = Object.assign({
    name: 'actions'
  }, ssConfig, {
    apiPath: '/api/v1/actions/views/overview'
  });

  const location = `${env.API_BASE_URI}/actions`;
  app.use(location, createService(options));

  const service = app.service(location);

  service.hooks(hooks);
  service.filter(filters);
};
