'use strict';

const https = require('https');
const qs = require('querystring');

const DEFAULT_FIELDS = ['prsId', 'firstName', 'lastName', 'nickName', 'emailAddress', 'allGroups'];
const REQUIRED_APP_SETTINGS = ['cookieName', 'authHost', 'appId', 'appAdminPassword'];

function parseResponse (txt) {
  if (!txt || typeof txt !== 'string') {
    return null;
  }
  return txt.split(/[\r\n]/).reduce((obj, line) => {
    line = line.trim();
    if (line.indexOf('=') > 0) {
      const parts = line.split('=');
      obj[parts[0]] = parts[1];
    }
    return obj;
  }, {});
}

// This is used for determining whether or not a user
// needs to get a new cookie.
class StaleCookieError extends Error {}

function validateUser(fields, cookie, authHost, appId, appAdminPassword, ip) {
  return new Promise((resolve, reject) => {
    const data = qs.stringify({
      func: fields.join(';'),
      ip,
      appId,
      appAdminPassword,
      cookie
    });
    // TODO: use 'request' module
    const req = https.request({
      port: 443,
      method: 'POST',
      host: authHost,
      path: '/IDMSWebAuth/validate',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(data)
      }
    }, res => {
      let result = '';
      res.on('data', data => result += data);
      res.on('end', () => {
        const resultObj = parseResponse(result);
        if (!resultObj) {
          // General parsing error - shouldn't really ever hit this
          reject(new Error('There was an error parsing the result object.'));
        }
        let err = null;
        switch (resultObj.status) {
        case '0':
          // success
          resultObj.allGroups = resultObj.allGroups.split(';');
          return resolve(resultObj);

        // # https://connectme.apple.com/docs/DOC-748638
        // 1: Client IP address mismatch
        // 2: Client IP argument is Null
        // 3: INVALID_SESSION
        // 4: EXPIRED_SESSION
        // 5: Invalid appId/appAdminPassword.
        // 6: cookie information not supplied
        // 7: CAN_NOT_KEEP_ALIVE
        // 8: BAD_ALLGROUP_PARAM_SUPPLIED
        // 9: INVALID_COOKIE
        // 10: EXPIRED_SESSION_FOR_APP
        // 11: CAN_NOT_FETCH_SESSION
        // 12: NOT_AUTHORIZED
        // 14: Application not authorized to call validate
        // 98: Unknown (ex: Decrypt DAW token Failed)
        // 99: DS_AUTH_WEB_UNDER_MAINTENANCE
        case '1':
        case '4':
        case '6':
          // These are special cases where everything is working, we just
          // need the user to get a new cookie.
          err = new StaleCookieError(`Your session seems to be stale. Please logout and back in (#${resultObj.status} - ${resultObj.reason}).`);
          break;

        default:
          err = new Error(`Auth validation error #${resultObj.status} - ${resultObj.reason}`);
          break;
        }
        return reject(err);
      });
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

const makeValidator = (options = {}) => {
  REQUIRED_APP_SETTINGS.forEach(key => {
    if(!options[key]) {
      throw new Error(`Missing required option "${key}" in SSO makeValidator options.`);
    }
  });
  const fields = options.fields || DEFAULT_FIELDS;
  const { cookieName, authHost, appId, appAdminPassword } = options;

  return (req) => {
    const authCookie = req.cookies[cookieName];
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    if (!authCookie) {
      return Promise.reject(new Error('No auth cookie found'));
    }
    if (!ip) {
      return Promise.reject(new Error('No IP address found for request'));
    }
    return validateUser(fields, authCookie, authHost, appId, appAdminPassword, ip);
  };
};

const middleware = (options) => {
  const validate = makeValidator(options);

  return (err, req, res, next) => {
    validate(req)
      .then(() => next())
      .catch(next);
  };
};

module.exports = {
  middleware,
  makeValidator
};
