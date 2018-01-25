import makeDebug from 'debug';
import { routeConfig, REG_PARAM_CURLY } from '@root/shared/routes';

const debug = makeDebug('medic:router');

/**
 * Builds and registers all client routes.
 *
 * Client routes should be configured *after* required default data has been
 * loaded for the app. This could include the current user, localStorge data,
 * and any other root-level data required by individual routes.
 *
 * @param  {Object} route     A reference to can-route
 * @param  {Object} defaults  Dictionary of default values
 * @return {Void}
 */
const registerRoutes = (route, context) => {
  routeConfig.forEach(config => {
    const defaults = Object.assign({}, config.data);

    if (config.needsDefault) {
      config.needsDefault.forEach(prop => {
        if (!context[prop] && context[prop] !== false) {
          throw new Error(`You are attempting to configure a route (${config.route}) without required default "${prop}".`);
        }
        defaults[prop] = context[prop];
      });
    }

    debug('Registering route', config.route, defaults);
    route.register(config.route, defaults);
  });
};

/**
 * Replaces route template `{params}` with values from the context.
 *
 * @param  {String} template  The parameterized route template (ex: /foo/{bar})
 * @param  {Object} context   An object with values to fill the route template
 * @return {String}           URL with all route params replace with values.
 */
const makeUrlFromRoute = (template, context) => {
  return template.replace(REG_PARAM_CURLY, (match, prop) => {
    return context[prop];
  });
};

/**
 * Build an array of navigation items based on the route config. Each
 * nav item consists of the following properties:
 *
 * - `text`: the display text
 * - `route`: the parameterized route template
 * - `url`: the "resolved" route template - a usable URL
 *
 * @param  {Object} context  Dictionary used to resolve route templates into URLs
 * @return {Array}           Nav items
 */
const buildNavItems = (context) => {
  return routeConfig.filter(config => !!config.nav).map(config => {
    return { text: config.nav, route: config.route, url: makeUrlFromRoute(config.route, context) };
  });
};

export { registerRoutes, buildNavItems };
