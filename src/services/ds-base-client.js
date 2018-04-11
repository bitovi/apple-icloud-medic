// const url = require('url');
const request = require('request-promise');
const errors = require('feathers-errors');

const formatError = err => {
  const msg = err.error && err.error.faultstring || err.message;
  if(errors[err.statusCode]) {
    throw new errors[err.statusCode](msg, err.error);
  }
  throw new errors.GeneralError(msg, err.error);
};

// simple cache until something better is needed
let AUTH_CACHE = null;
const AUTH_CACHE_TIMEOUT = 1000 * 60 * 60 * 2; // ms

const rejectIfError = (response) => {
  let err = null;
  if (response.errorCode) {
    err = {
      code: response.errorCode,
      message: response.errorMsg
    };
  } else if(response.dsresponse && response.dsresponse.allExceptions && response.dsresponse.allExceptions.length) {
    err = {
      message: response.dsresponse.allExceptions[0].errorMessage
    };
  }
  if (err) {
    return Promise.reject(err);
  }
  return Promise.resolve(response);
};

/**
 * Base Directory Services Client - should be extended by services for communicating with Apple Directoy Services.
 */
class BaseClient {
  constructor (options) {
    if (!options.host || options.host === 'DS_HOST') {
      throw new Error('Must define a Directory Services host!');
    }
    if (!options.appId || options.appId === 'DS_APP_ID') {
      throw new Error('Must define a Directory Services appId!');
    }
    if (!options.appPwd || options.appPwd === 'DS_APP_PWD') {
      throw new Error('Must define a Directory Services app password!');
    }
    if (!options.acctName || options.acctName === 'DS_SYSTEM_ACCT_NAME') {
      throw new Error('Must define a Directory Services account name!');
    }
    if (!options.acctPwd || options.acctPwd === 'DS_SYSTEM_ACCT_PWD') {
      throw new Error('Must define a Directory Services account password!');
    }
    if (!options.apiPath) {
      throw new Error('All DS services must declare their apiPath.');
    }
    // IMPORTANT: All config should be available under the `config` property.
    // This is especially important for permission checks.
    this.config = Object.assign({}, options);
    return this;
  }

  request (method, params) {
    if (!this.config || !this.config.host || !this.config.appId || !this.config.apiPath) {
      return Promise.reject(new Error('The Directory Services client is not initialized properly. Did you forget to call super() inside your constructor?'));
    }

    const uri = this.config.host + this.config.apiPath;
    const body = {
      'dSRequest' : {
        'session' : {
          'userSession' : null
        },
        'appCredentials' : {
          'appPassword' : this.config.appPwd,
          'appID' : this.config.appId
        }
      },
      'groupID' : params.query.groupId
    };
    const headers = {
      'Accept':'application/json',
      'Content-Type':'application/json',
      'appPwd' : this.config.appPwd,
      'appID' : this.config.appId
    };

    return this.authSession(headers).then(response => {
      body.dSRequest.session.userSession = response.session.userSession;
      return request({ uri, method, headers, body, json: true })
        .then(rejectIfError)
        .catch(formatError);
    });
  }
  authSession(headers) {
    if (AUTH_CACHE && (new Date() - AUTH_CACHE._timestamp) < AUTH_CACHE_TIMEOUT) {
      return AUTH_CACHE;
    }

    const body = {
      'dsRequest' : {
        'languageCd' : 'US-EN',
        'clientVersion' : 'v1',
        'appCredentials' : {
          'appID' : this.config.appId,
          'appPassword' : this.config.appPwd
        }
      },
      'account' : {
        'accountName' : this.config.acctName,
        'password' : this.config.acctPwd,
        'appId' : this.config.appId,
        'updated' : true
      },
      'personFetchPrefs' : {
        'fetchAccount' : true,
        'fetchCoreInfo' : true
      }
    };
    const uri =  `${this.config.host}/service/authservice/authenticate/`;
    AUTH_CACHE = request({ uri, method: 'POST', headers, body, json: true }).then(response => {
      if(!response.session) {
        return rejectIfError(response).then(() => {
          // If we make it here, it's an unknown error.
          // We likely need to update the error parser above.
          throw new Error('Unkown error during DS authentication');
        });
      }
      return response;
    }).catch(err => {
      AUTH_CACHE = null;
      return formatError(err);
    });

    AUTH_CACHE._timestamp = new Date();

    return AUTH_CACHE;
  }
}

module.exports = BaseClient;
