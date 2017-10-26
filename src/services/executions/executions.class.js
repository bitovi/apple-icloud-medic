const BaseClient = require('../st2-base-client');

class Executions extends BaseClient {
  constructor (options) {
    return super(options);
  }

  find (params) {
    return this.request(params);
  }

  get (id, params) {
    return this.request(params);
  }

  // create (data, params) {
  //   return this.request(params, data);
  // }

  // patch (id, data, params) {
  //   return this.request(params, data);
  // }

  // update (id, data, params) {
  //   return this.request(params, data);
  // }

  // remove (id, params) {
  //   return this.request(params);
  // }
}

module.exports = function (options) {
  return new Executions(options);
};

module.exports.Service = Executions;
