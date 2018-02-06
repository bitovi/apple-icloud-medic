const users = require('./users/users.service.js');
const executions = require('./executions/executions.service.js');
const executionFilters = require('./execution-filters/execution-filters.service.js');
const userExecutions = require('./user-executions/user-executions.service.js');
const teams = require('./teams/teams.service.js');
const projects = require('./projects/projects.service.js');
const categories = require('./categories/categories.service.js');
const rules = require('./rules/rules.service.js');
const roles = require('./roles/roles.service.js');

module.exports = function () {
  const app = this;
  app.configure(users);
  app.configure(executions);
  app.configure(executionFilters);
  app.configure(userExecutions);
  app.configure(teams);
  app.configure(projects);
  app.configure(categories);
  app.configure(rules);
  app.configure(roles);
};
