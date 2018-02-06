/**
 * This module loads the permissions for the user and decorates
 * the user object with the information required for the permission-check
 * hook to do its job.
 */

const errors = require('feathers-errors');
const dotProp = require('dot-prop');
const debug = require('debug')('medic:permissions');
const { mergePermissions } = require('../../shared/permission-helper');

/**
 * Mapping of entities which should inherit permissions from another entity.
 * @type {Object}
 */
const INHERITS = {
  'executions': 'teams',
  'execution-filters': 'teams',
};

/**
 * Decorates a user with "permission" based on the users roles.
 *
 * @param  {Object} user
 * @param  {Object} app
 * @return {Promise}      Resolves with the decorated user object
 */
const decorateUserPermissions = (user, app) => {
  // If user is super admin or the permissions already exist, exit early
  if (user.isSuperAdmin || user.permissions) {
    debug('Skipping permission decoration', user);
    return Promise.resolve(user);
  }

  debug('Loading roles');
  // Load the permissions from the database
  // This should only happen once per user per session
  return app.service('roles').Model.findAll({
    // We do in-memory filtering of roles (below) because users might belong to too many
    // groups to perform an efficient WHERE IN db query. There should only ever be a
    // small (rather finite, < 100) list of roles in the DB, so loading them all and
    // doing in-memory filtering doesn't hurt much.
    // where: {
    //  dsGroupId: {
    //    $in: user.allGroups
    //  }
    // }
  }).then(roles => {
    debug('Roles loaded (count):', roles.length);
    // Reduce allGroups to only the ones that matter
    // While we're at it, build the permissions object.
    user.permissions = {};
    user.allGroups = roles.reduce((groups, role) => {
      if(user.allGroups.includes(role.dsGroupId)) {
        groups.push(role.dsGroupId);
        mergePermissions(role.permissions, user.permissions);
      }
      return groups;
    }, []);

    if( !user.allGroups.length || !Object.keys(user.permissions).length ) {
      throw new errors.Forbidden('You do not have any permissions assigned.') ;
    }

    // For any inherted/aliased entities, map those over
    Object.keys(INHERITS).forEach(key => {
      const from = INHERITS[key];
      if (!user.permissions[from]) {
        // user doesn't have permissions
        return;
      }
      // only if permissions don't yet exist, copy them
      // otherwise they were explicitly defined by a user
      if (!user.permissions[key]) {
        user.permissions[key] = user.permissions[from];
      }
    });

    debug(`Generated User Permissions: ${JSON.stringify(user.permissions)}`);

    return user;
  });
};

module.exports = (options) => {
  options = Object.assign({
    getUserFrom: 'params.user'
  }, options);
  return (hook) => {
    const user = dotProp.get(hook, options.getUserFrom);
    if (!user) {
      throw new Error(`No user found on "hook.${options.getUserFrom}"`);
    }
    debug(`Decorating user permissions (${hook.method} ${hook.path})`, user);
    return decorateUserPermissions(user, hook.app).then(() => hook);
  };
};
