const BaseClient = require('../st2-base-client');

class Executions extends BaseClient {
  constructor (options) {
    return super(options);
  }

  find (params) {
    return this.request('GET', params);
  }

  get (id, params) {
    return this.request('GET', id, params);
  }

  // create (data, params) {
  //   return this.request('POST', params, data);
  // }

  // patch (id, data, params) {
  //   return this.request('PUT', id, params, data);
  // }

  // update (id, data, params) {
  //   return this.request('PUT', id, params, data);
  // }

  // remove (id, params) {
  //   return this.request('DELETE', id, params);
  // }
}

module.exports = function (options) {
  return new Executions(options);
};

module.exports.Service = Executions;
