const users = require('./users/users.service.js');
const executions = require('./executions/executions.service.js');
const executionFilters = require('./execution-filters/execution-filters.service.js');

module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);

  // stackstorm-related services
  app.configure(executions);
  app.configure(executionFilters);
};
