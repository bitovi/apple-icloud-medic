/**
 * Given a person object loaded from DS and a property map, creates
 * a new object with a standard set of properties.
 */
const normalizePerson = (person, propMap) => {
  const result = Object.keys(person).reduce((obj, key) => {
    obj[ propMap[key] || key ] = person[key];
    return obj;
  }, {});

  if (!result.displayName) {
    result.displayName = (result.nickName || result.firstName) + ' ' + result.lastName;
  }
  if (!result.allGroups) {
    result.allGroups = [];
  }

  return result;
};

module.exports = {
  normalizePerson
};
