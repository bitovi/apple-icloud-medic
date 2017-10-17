'use strict';

const https = require('https');
const qs = require('querystring');

const DEFAULT_FIELDS = ['firstName', 'lastName', 'nickName', 'emailAddress', 'allGroups'];
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
      path: `/IDMSWebAuth/validate`,
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
          reject('There was an error parsing the result object.');
        }
        if (resultObj.status === '0') {
          return resolve(resultObj);
        }
        reject(new Error(resultObj.reason || 'Unexpected error while parsing auth response.'));
      });
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

const makeValidator = (options = {}) => {
  const fields = options.fields || DEFAULT_FIELDS;
  const { cookieName, authHost, appId, appAdminPassword } = options;

  return (req) => {
    const authCookie = req.cookies[cookieName];
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    if (!authCookie) {
      return Promise.reject(new Error('No auth cookie found'));
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
