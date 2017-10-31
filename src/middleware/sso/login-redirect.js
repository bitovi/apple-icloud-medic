'use strict';

module.exports = (options) => {
  const { enabled, cookieName, authHost, appIdKey, appRedirectVersion } = options;
  return (req, res, next) => {
    if (''+enabled === 'false') return next();

    // If no cookie, redirect to login
    if (!req.cookies[cookieName]) {
      let url = 'https://' + authHost + '/IDMSWebAuth/login';
      url += '?appIdKey=' + appIdKey;
      url += '&path=' + req.path;
      if (appRedirectVersion) {
        url += '&rv=' + appRedirectVersion;
      }
      res.redirect(url);
      return;
    }
    next();
  };
};
