const url = require('url');
const request = require('request-promise');
const errors = require('feathers-errors');

const REG_SLASHES = /(?:^\/|\/$)/g;
const REG_PROTOCOL = /^https?:\/\//;
const PARAM_MAP = {
  '$limit': 'limit',
  '$skip': 'offset',
  '$sort': 'sort'
};

const formatError = err => {
  const msg = err.error && err.error.faultstring || err.message;
  if(errors[err.statusCode]) {
    throw new errors[err.statusCode](msg, err.error);
  }
  throw new errors.GeneralError(msg, err.error);
};

/**
 * Base ST2 Client - should be extended by services for communicating with StackStorm.
 */
class BaseClient {
  constructor (options) {
    if (!options.host || options.host === 'ST2_HOST') {
      throw new Error('Must define a StackStorm host!');
    }
    if (!options.apiKey || options.apiKey === 'ST2_API_KEY') {
      throw new Error('Must define a StackStorm API Key!');
    }
    if (!options.apiPath) {
      throw new Error('All StackStorm services must declare their apiPath.');
    }
    if (!REG_PROTOCOL.test(options.host)) {
      throw new Error('The StackStorm host must include the protocol');
    }
    if (('' + options.secret).length < 400) {
      throw new Error('The Stackstorm secret must be at least 400 characters in length');
    }
    const parsed = url.parse(options.host);

    // IMPORTANT: All stackstorm config should be available under the `config` property.
    // This is especially important for permission checks.
    this.config = Object.assign({}, options, {
      // `parsed.host` includes the :port
      host: `${parsed.protocol}//${parsed.host}`,
      apiPath: '/' + options.apiPath.replace(REG_SLASHES, '')
    });
    return this;
  }

  request (method, id, params, body) {
    if (!this.config || !this.config.host || !this.config.apiKey || !this.config.apiPath) {
      return Promise.reject(new Error('The StackStorm client is not initialized properly. Did you forget to call super() inside your constructor?'));
    }
    // id's should only ever be strings or integers
    if (id instanceof Object) {
      body = params;
      params = id;
      id = null;
    }
    const uri = this.config.host + this.config.apiPath + (id ? `/${id}` : '') + (this.config.secondaryPath || '');
    // replace feathers-style query params with those expected by StackStorm
    const qs = Object.keys(params.query).reduce((obj, key) => {
      obj[PARAM_MAP[key] || key] = params.query[key];
      return obj;
    }, {});
    const headers = {
      'St2-Api-Key': this.config.apiKey
    };
    return request({ uri, method, headers, qs, body, json: true }).catch(formatError);
  }
}

module.exports = BaseClient;
