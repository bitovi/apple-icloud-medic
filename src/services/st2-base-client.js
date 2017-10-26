const url = require('url');
const request = require('request-promise');

const REG_LEADING_SLASH = /^\//;
const REG_PROTOCOL = /^https?:\/\//;
const METHOD_MAP = {
  'find': 'GET',
  'get': 'GET',
  'create': 'POST',
  'update': 'PUT',
  'patch': 'PUT',
  'remove': 'DELETE'
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
      throw new Error('All StackStorm services must declare their apiPath.')
    }
    if (!REG_PROTOCOL.test(options.host)) {
      throw new Error('The StackStorm host must include the protocol');
    }
    const parsed = url.parse(options.host);
    this.options = Object.assign({}, options, {
      // `parsed.host` includes the :port
      host: `${parsed.protocol}//${parsed.host}`,
      apiPath: '/' + options.apiPath.replace(REG_LEADING_SLASH, '')
    });
    return this;
  }

  request (params, json) {
    if (!this.options || !this.options.host || !this.options.apiKey || !this.options.apiPath) {
      return Promise.reject(new Error('The StackStorm client is not initialized properly. Did you forget to call super() inside your constructor?'));
    }
    const uri = this.options.host + this.options.apiPath;
    const method = METHOD_MAP[params.method];
    const qs = params.query;
    const headers = {
      'St2-Api-Key': this.options.apiKey
    };
    return request({ uri, method, headers, qs, json });
  }
}

module.exports = BaseClient;
