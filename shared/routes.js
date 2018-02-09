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
  'project': 'public/app/pages/project/project'
};

/**
 * Route config used for defining client and server side routes. This
 * config is also used to generate the top-level navigation. Each config
 * item can have the following properties:
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
  { route: '/{teamName}/projects/{projectId}/{tabId}', data: { moduleId: PAGES.project } },
  { route: '/{teamName}/projects/{projectId}/{tabId}/{tabItemId}', data: { moduleId: PAGES.project } },
];

module.exports = { routeConfig, PAGES, REG_PARAM_CURLY };
