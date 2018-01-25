// regex for matching can-route style {params}
const REG_PARAM_CURLY = /{([^}]+)}/g;

/**
 * Dictionary of dynamically imported page modules
 * @type {Object}
 */
const PAGES = {
  'execution': '@public/app/pages/execution/execution',
  'executions': '@public/app/pages/executions/executions',
  'user-executions': '@public/app/pages/user-executions/user-executions'
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
  { route: '/{teamName}', data: { moduleId: PAGES.executions }, needsDefault: ['teamName'] },
  { route: '/{teamName}/executions', nav: 'Executions', data: { moduleId: PAGES.executions } },
  { route: '/{teamName}/executions/{executionId}', data: { moduleId: PAGES.execution } },
  { route: '/{teamName}/user-executions', nav: 'User Executions', data: { moduleId: PAGES['user-executions'] } },
];

module.exports = { routeConfig, PAGES, REG_PARAM_CURLY };
