const debug = require('debug')('medic:permissions');
const { userHasPermission } = require('../../shared/permission-helper');

/**
 * This module checks user permissions for individual request.
 * Here's how it works:
 *
 *  1. Determine the name of entity being acted upon
 *  2. Check against user.permissions for access rights
 *     SEE: permission-decorator.js for how user.permissions are set
 */
const checkPermissions = () => {
  return (hook) => {
    const user = hook.params.user;
    const Model = hook.service.Model;

    const entityName = (hook.service.config && hook.service.config.name) || (Model && Model.name);
    if (!entityName) {
      throw new Error(`Unable to determine entity name for the ${hook.path} service. The service should have a "config.name" property.`);
    }

    debug(`Checking user permissions for "${hook.method} ${entityName}":`, user.permissions);
    // Returns true, or an error object
    const result = userHasPermission(user, entityName, hook.method);
    if (result !== true) {
      throw result;
    }
    return hook;
  };
};

module.exports = checkPermissions;
