'use strict';

const REG_CONNECT_HEADER = /^x-appleconnect-/i;
const KEY_MAP = {
  'firstname': 'firstName',
  'lastname': 'lastName',
  'nickname': 'nickName',
  'emailaddress': 'emailAddress',
  'groups': 'allGroups'
};

const makeExtractor = (/*app*/) => {
  return (req) => {
    return new Promise((resolve, reject) => {
      let user = {};
      // req.headers['x-appleconnect-firstname']
      // req.headers['x-appleconnect-lastname']
      // req.headers['x-appleconnect-emailaddress']
      // req.headers['x-appleconnect-groups']
      Object.keys(req.headers).forEach(header => {
        if (REG_CONNECT_HEADER.test(header)) {
          const key = header.split('-').pop();
          user[ KEY_MAP[key] || key ] = req.headers[header];
        }
      });

      if (Object.keys(user).length === 0) {
        reject(new Error('Unable to extract user from request headers.'));
        return;
      }

      resolve(user);
    });
  };
};

/**
 * Middleware used for initializing the session
 */
const middleware = () => {
  const extract = makeExtractor();

  return (err, req, res, next) => {
    // The expressJWT middleware will throw an 'UnauthorizedError'
    if(err && err.name === 'UnauthorizedError') {
      return extract(req).then(user => {
        req.user = user;
        next();
      }).catch(next);
    }

    next(err);
  };
};

module.exports = {
  middleware,
  makeExtractor
};
