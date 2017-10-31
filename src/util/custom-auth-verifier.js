const errors = require('feathers-errors');
const { makeValidator } = require('../middleware/sso/validate-cookie');
const { makeExtractor } = require('../middleware/sso/extract-user-from-headers');
const env = require('../../shared/env');

const REG_VALID_GROUPS = /^[\d,]+$/;

// When using Orchard's Apple Connect, the load balancer will append
// user information to the request headers and strip the cookie. We do
// not need to validate the user - just extract the information from
// the headers.
const reqHasAuthHeaders = (req) => {
  return req.headers.hasOwnProperty('x-appleconnect-emailaddress');
};

class CustomVerifier {
  constructor(app, settings) {
    const ssoConfig = app.get('sso');

    // super admin groups must be defined
    if( !ssoConfig.superAdminGroups || !REG_VALID_GROUPS.test(ssoConfig.superAdminGroups) ) {
      throw new Error('You must specify at least one Super Admin Group ID environment variable. Please review the projects README for more information.');
    }

    this.app = app;
    this.superAdminGroups = ssoConfig.superAdminGroups.split(',');
    this.devUserGroups = REG_VALID_GROUPS.test(ssoConfig.devUserGroups) ? ssoConfig.devUserGroups.split(',') : this.superAdminGroups;
    this.extract = makeExtractor();
    this.validate = makeValidator({
      cookieName: ssoConfig.cookieName,
      authHost: ssoConfig.authHost,
      appId: ssoConfig.appId,
      appAdminPassword: ssoConfig.appAdminPassword
    });
  }

  verify(req, done) {
    const ssoConfig = this.app.get('sso');

    // TODO: This should not be needed. See middleware which sets req.feathers.connection
    // Also see: https://github.com/feathersjs/feathers-authentication/issues/494
    req.connection = req.params.connection;

    let userPromise;
    if (env.IS_REMOTE && (''+ssoConfig.enabled !== 'false')) {
      if (ssoConfig.trustAuthHeaders && reqHasAuthHeaders(req)) {
        // Auth headers appended by load balancer (ex: Orchard)
        userPromise = this.extract(req);
      } else {
        // Manually validate the auth cookie
        userPromise = this.validate(req);
      }
    } else {
      // Local dev mode
      userPromise = Promise.resolve({
        firstName: 'Dev',
        lastName: 'User',
        nickName: 'Dev_Nickname',
        email: 'dev_user@dev.apple.com',
        allGroups: this.devUserGroups
      });
    }

    userPromise
    .then(user => {
      // Make a display name so we don't have to check for nickName everywhere
      user.displayName = (user.nickName || user.firstName) + ' ' + user.lastName;
      user.isSuperAdmin = false;
      user.allGroups.some(groupId => {
        if(this.superAdminGroups.indexOf(groupId) !== -1) {
          this.app.info(`MSG="User is a super admin." USER=${user.email}`);
          user.isSuperAdmin = true;
          return true; // break
        }
      });
      this.app.info(`MSG="User is a super admin." USER=${user.email}`);
      done(null, user);
    })
    // convert error to a NotAuthenticated error
    .catch(err => {
      done(new errors.NotAuthenticated(err))
    });
  }
};

module.exports = CustomVerifier;
