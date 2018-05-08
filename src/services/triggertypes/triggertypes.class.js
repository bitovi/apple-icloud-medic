const BaseClient = require('../st2-base-client');

class TriggerTypes extends BaseClient {
  find (params) {
    return this.request('GET', params);
  }

  get (id, params) {
    return this.request('GET', id, params);
  }
}

module.exports = function (options) {
  return new TriggerTypes(options);
};

module.exports.Service = TriggerTypes;
