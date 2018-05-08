const users = require('./users/users.service.js');
const executions = require('./executions/executions.service.js');
const st2executions = require('./st2-executions/st2-executions.service.js');
const executionFilters = require('./execution-filters/execution-filters.service.js');
const elasticsearchUtil = require('./elasticsearch-util/elasticsearch-util.service.js');
const userExecutions = require('./user-executions/user-executions.service.js');
const teams = require('./teams/teams.service.js');
const projects = require('./projects/projects.service.js');
const categories = require('./categories/categories.service.js');
const rules = require('./rules/rules.service.js');
const roles = require('./roles/roles.service.js');
const projectContributors = require('./project-contributors/project-contributors.service.js');
const groupMembers = require('./group-members/group-members.service.js');
const teamMembers = require('./team-members/team-members.service.js');
const triggertypes = require('./triggertypes/triggertypes.service.js');
const actions = require('./actions/actions.service.js');

module.exports = function () {
  const app = this;
  app.configure(users);
  // register the elasticsearch-util early so it's available for others
  app.configure(elasticsearchUtil);
  app.configure(executions);
  app.configure(st2executions);
  app.configure(executionFilters);
  app.configure(userExecutions);
  app.configure(teams);
  app.configure(projects);
  app.configure(categories);
  app.configure(rules);
  app.configure(roles);
  app.configure(projectContributors);
  app.configure(groupMembers);
  app.configure(teamMembers);
  app.configure(triggertypes);
  app.configure(actions);
};
