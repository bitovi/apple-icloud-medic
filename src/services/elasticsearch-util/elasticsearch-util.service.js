const createService = require('./elasticsearch-util.class');
const hooks = require('./elasticsearch-util.hooks');
const { API_BASE_URI } = require('../../../shared/env');

module.exports = function () {
  const app = this;
  const elasticsearchClient = app.get('elasticsearchClient');

  const options = {
    name: 'elasticsearch-util',
    skipAuthentication: true,
    skipGlobalPermissionCheck: true,
    elasticsearchClient
  };

  /**
   * NOTE: this is a special service which does not adhere to REST.
   * This is more of an "actions" service for administering elasticsearch.
   * The convention is to use the "id" param to hold the action name, and
   * GET/PUT/DELETE for getting, creating/updating, or removing respectively.
   *
   *   GET /elasticsearch-util/list-indices
   *   PUT /elasticsearch-util/reindex
   *   DELETE /elasticsearch-util/delete-index?index=foobar
   *
   * This allows us to use hooks, existing client code, and a single
   * service for all things elasticsearch administration.
   */

  const location = `${API_BASE_URI}/elasticsearch-util`;
  // Initialize our service with any options it requires
  app.use(location, createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service(location);

  service.hooks(hooks);
  service.filter(() => false); // disable all socket events
};
