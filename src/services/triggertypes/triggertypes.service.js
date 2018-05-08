const env = require('../../../shared/env');
const createService = require('./triggertypes.class');
const hooks = require('./triggertypes.hooks');
const filters = require('./triggertypes.filters');

module.exports = function () {
  const app = this;
  const ssConfig = app.get('stackstorm');

  const options = Object.assign({
    name: 'triggertypes'
  }, ssConfig, {
    apiPath: '/api/v1/triggertypes'
  });

  const location = `${env.API_BASE_URI}/triggertypes`;
  app.use(location, createService(options));

  const service = app.service(location);

  service.hooks(hooks);
  service.filter(filters);
};
