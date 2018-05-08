const BaseClient = require('../st2-base-client');

class Actions extends BaseClient {
  find (params) {
    return this.request('GET', params);
  }

  get (id, params) {
    return this.request('GET', id, params);
  }
}

module.exports = function (options) {
  return new Actions(options);
};

module.exports.Service = Actions;
