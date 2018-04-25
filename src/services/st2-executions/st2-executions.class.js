const BaseClient = require('../st2-base-client');

class St2Executions extends BaseClient {
  find (params) {
    return this.request('GET', params);
  }

  get (id, params) {
    return this.request('GET', id, params);
  }
}

module.exports = function (options) {
  return new St2Executions(options);
};

module.exports.Service = St2Executions;
