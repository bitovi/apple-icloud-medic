import makeDebug from 'debug';
import moment from 'moment';
import Session from '@public/models/session';
import { userHasPermission as _userHasPermission } from '@root/shared/permission-helper';

const sessionDebug = makeDebug('medic:session');

/**
 * Ensures an array-like object is converted to an actual array.
 * This is useful for passing DefineLists as props where an array
 * is expected or enforced.
 *
 * @param  {Object|Array} list   An array-like object.
 * @return {Array}
 */
const listAsArray = (list) => {
  return [...list];
};

/**
 * Determine if a user has permission for a particular entity.
 * @param  {String} entityName
 * @param  {String} action ("get", "find", "create", "update", "patch", "remove")
 * @return {Boolean}
 */
const userHasPermission = (entityName, action) => {
  if (!Session.current || !Session.current.user) {
    sessionDebug('No user defined for permission check');
    return false;
  }
  const result = _userHasPermission(Session.current.user, entityName, action);
  if (result !== true) {
    sessionDebug('User does not have permission:', result);
    return false;
  }
  return true;
};

/**
 * Format a date using moment
 * @param  {String|Date} date
 * @param  {String} format
 * @return {String}
 */
const formatDate = (date, format = 'YYYY-MM-DD hh:ss') => {
  return moment(date).format(format);
};

export { listAsArray, formatDate, userHasPermission };
