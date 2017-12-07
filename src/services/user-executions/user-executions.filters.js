module.exports = function (data, connection, hook) { // eslint-disable-line no-unused-vars
  const user = connection.user;

  if (user) {
    if(data.userId === user.emailAddress) {
      return data;
    }
    if (data.groupIds && data.groupIds.length && data.groupIds.some(n => user.allGroups.includes(n))) {
      return data;
    }
  }

  return false;
};
