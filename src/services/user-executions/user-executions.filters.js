module.exports = function (data, connection/*, hook*/) {
  const user = connection.user;

  if (user) {
    if(data.userEmail === user.emailAddress) {
      return data;
    }
    if (data.groupIds && data.groupIds.length && data.groupIds.some(n => user.allGroups.includes(n))) {
      return data;
    }
  }

  return false;
};
