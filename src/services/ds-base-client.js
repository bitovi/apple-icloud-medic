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
    this.dsConfig = Object.assign({}, options);
    return this;
  }

  request (method, params) {
    if (!this.dsConfig || !this.dsConfig.host || !this.dsConfig.appId || !this.dsConfig.apiPath) {
      return Promise.reject(new Error('The Directory Services client is not initialized properly. Did you forget to call super() inside your constructor?'));
    }

    const uri = this.dsConfig.host + this.dsConfig.apiPath;
    const body = {
      'dSRequest' : {
        'session' : {
          'userSession' : null
        },
        'appCredentials' : {
          'appPassword' : this.dsConfig.appPwd,
          'appID' : this.dsConfig.appId
        }
      },
      'groupID' : params.query.groupId
    };
    const headers = {
      'Accept':'application/json',
      'Content-Type':'application/json',
      'appPwd' : this.dsConfig.appPwd,
      'appID' : this.dsConfig.appId
    };

    return this.authSession(headers).then((response) => {
      body.dSRequest.session.userSession = response.session.userSession;
      return request({ uri, method, headers, body, json: true }).catch(formatError);
    });
  }
  authSession(headers) {
    const body = {
      'dsRequest' : {
        'languageCd' : 'US-EN',
        'clientVersion' : 'v1',
        'appCredentials' : {
          'appID' : this.dsConfig.appId,
          'appPassword' : this.dsConfig.appPwd
        }
      },
      'account' : {
        'accountName' : this.dsConfig.acctName,
        'password' : this.dsConfig.acctPwd,
        'appId' : this.dsConfig.appId,
        'updated' : true
      },
      'personFetchPrefs' : {
        'fetchAccount' : true,
        'fetchCoreInfo' : true
      }
    };
    const uri =  `${this.dsConfig.host}/service/authservice/authenticate/`;
    return request({ uri, method: 'POST', headers, body, json: true }).catch(formatError);
  }
}


module.exports = BaseClient;
