const BaseClient = require('../st2-base-client');

class ExecutionFilters extends BaseClient {
  constructor (options) {
    return super(options);
  }

  find (params) {
    return this.request('GET', params);
  }
}

module.exports = function (options) {
  return new ExecutionFilters(options);
};

module.exports.Service = ExecutionFilters;
