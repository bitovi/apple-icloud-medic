const users = require('./users/users.service.js');
const executions = require('./executions/executions.service.js');
const executionFilters = require('./execution-filters/execution-filters.service.js');
const userExecutions = require('./user-executions/user-executions.service.js');
const teams = require('./teams/teams.service.js');

module.exports = function () {
  const app = this;
  app.configure(users);
  app.configure(executions);
  app.configure(executionFilters);
  app.configure(userExecutions);
  app.configure(teams);
};
