const debug = require('debug')('medic:permissions');
const errors = require('feathers-errors');

/**
 * List of valid permissions ordered from lowest to highest privelege
 * This is used for merging permission objects - greatest wins
 * @type {Array}
 */
const PERM_LEVELS = ["ro-user", "rw-user", "admin"];

/**
 * Mapping of feathers serivce-methods allowed for each permission level
 * @type {Object}
 */
const PERM_METHODS = {
  "ro-user": ["get", "find"],
  "rw-user": ["get", "find", "create", "update", "patch"],
  "admin": ["get", "find", "create", "update", "patch", "remove"]
};

/**
 * Compares two values against the levels array.
 * Whichever is greater wins.
 *
 * @param  {String} val1
 * @param  {String} val2
 * @return {String}            The winning value
 */
const greatestPermissionWins = (val1, val2) => {
  const val1Index = PERM_LEVELS.indexOf(val1);
  const val2Index = PERM_LEVELS.indexOf(val2);
  if (val1Index === -1)
    throw new Error(`Unknown permission name "${val1}"`);
  if (val2Index === -1)
    throw new Error(`Unknown permission name "${val2}"`);
  return val1Index > val2Index ? val1 : val2;
};

/**
 * Deep merges two permission objects. Whenever permission values are
 * encountered (eg: ro-user, rw-user, etc), the greatest one wins.
 *
 * @param  {Object} source
 * @param  {Object} target
 * @return {Object}            The target object with merged properties
 */
const mergePermissions = (source, target = {}) => {
  if (!source) return target;
  for(let key in source) {
    if ( !target[key] ) {
      target[key] = source[key];
      continue;
    }
    const sourceType = typeof source[key];
    const targetType = typeof target[key];
    if (sourceType !== targetType) {
      throw new Error(`Disparity between "${key}" permission types:\nSOURCE (${sourceType}): "${key}": ${JSON.stringify(source[key], null, '  ')}\nTARGET (${targetType}): "${key}": ${JSON.stringify(target[key], null, '  ')}`);
    }
    if (sourceType === 'object') {
      mergePermissions(source[key], target[key]);
      continue;
    }
    if (sourceType === 'string') {
      target[key] = greatestPermissionWins(source[key], target[key]);
      continue;
    }
    throw new Error(`Unrecognized permission value: typeof "${sourceType}"`);
  }
  return target;
};

/**
 * Checks if a user has permission to "action" a particular "entityName".
 *
 * @param  {Object} user
 * @param  {String} entityName
 * @param  {String} action
 * @return {true|Error}         Returns true, or an error object
 */
const userHasPermission = (user, entityName, action) => {
  if (!user || !entityName || !action) {
    return new Error(`Insufficient permissions information: user: ${!!user}, entityName: ${!!entityName}, action: ${!!action}.`);
  }

  if (user.isSuperAdmin) {
    return true;
  }

  if (!user.permissions) {
    let msg = 'User is not decorated with permissions.';
    return new Error(msg);
  }

  // { '[entityName]': '[permission]' }
  if (!user.permissions[entityName] && !user.permissions['*']) {
    return new errors.Forbidden(`You do not have permissions for the "${entityName}" resource. Please contact an administrator.`);
  }

  let perm;
  if (user.permissions[entityName] && user.permissions['*']) {
    perm = greatestPermissionWins(user.permissions[entityName], user.permissions['*']);
  } else {
    perm = user.permissions[entityName] || user.permissions['*'];
  }

  if (!PERM_METHODS[perm]) {
    return new Error(`Unrecognized permission "${perm}"`);
  }

  if (!PERM_METHODS[perm].includes(action)) {
    return new errors.Forbidden(`You do not have permissions to ${action} ${entityName}.`);
  }

  debug(`User has "${action}" permission for ${entityName}.`);
  return true;
};

module.exports = { mergePermissions, userHasPermission };
