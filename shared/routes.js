// regex for matching can-route style {params}
const REG_PARAM_CURLY = /{([^}]+)}/g;

/**
 * Dictionary of dynamically imported page modules
 * @type {Object}
 */
const PAGES = {
  'user-executions': 'public/app/pages/user-executions/user-executions',
  'executions': 'public/app/pages/executions/executions',
  'execution': 'public/app/pages/execution/execution',
  'projects': 'public/app/pages/projects/projects',
  'project': 'public/app/pages/project/project',
  'rule': 'public/app/pages/rule/rule'
};

/**
 * Route config used for defining client and server side routes.
 * In the client. this config is used to generate the top-level navigation.
 * On the server, this is used to determine when to send the index.html page.
 *
 * Each config item can have the following properties:
 *
 * - `route` (required) : the parameterized route template
 * - `nav`   (optional) : if present, will render a menu item with the specified text
 * - `data`  (optional) : the default data associated with this route
 * - `needsDefault` (optional) : array of required defaults needed for this route
 *
 * @type {Array}
 */
const routeConfig = [
  { route: '/', data: { moduleId: PAGES.executions }, needsDefault: ['teamName'] },
  { route: '/{teamName}', data: { moduleId: PAGES.executions }, needsDefault: ['teamName'] },
  { route: '/{teamName}/user-executions', nav: 'User Executions', data: { moduleId: PAGES['user-executions'] } },
  { route: '/{teamName}/executions', nav: 'Executions', data: { moduleId: PAGES.executions } },
  { route: '/{teamName}/executions/{executionId}', data: { moduleId: PAGES.execution } },
  { route: '/{teamName}/projects', nav: 'Projects', data: { moduleId: PAGES.projects } },
  { route: '/{teamName}/projects/{projectId}', data: { moduleId: PAGES.project } },
  { route: '/{teamName}/projects/{projectId}/{tabKey}', data: { moduleId: PAGES.project } },
  { route: '/{teamName}/projects/{projectId}/{tabKey}/{tabItemId}', data: { moduleId: PAGES.project } },
  { route: '/{teamName}/rules/{ruleId}', data: { moduleId: PAGES.rule } },
  { route: '/{teamName}/rules/{ruleId}/{tabKey}', data: { moduleId: PAGES.rule } },
  { route: '/{teamName}/rules/{ruleId}/{tabKey}/{tabItemId}', data: { moduleId: PAGES.rule } },
];

module.exports = { routeConfig, PAGES, REG_PARAM_CURLY };
