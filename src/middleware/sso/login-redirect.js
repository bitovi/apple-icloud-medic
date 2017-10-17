'use strict';

module.exports = (options) => {
  const { cookieName, authHost, appIdKey, appRedirectVersion } = options;
  return (req, res, next) => {
    // If no cookie, redirect to login
    if (!req.cookies[cookieName]) {
      let url = 'https://' + authHost + '/IDMSWebAuth/login';
      url += '?appIdKey=' + appIdKey;
      url += '&path=' + req.path;
      if (appRedirectVersion) {
        url += '&rv=' + appRedirectVersion;
      }
      res.redirect(url);
    }

    next();
  };
};
