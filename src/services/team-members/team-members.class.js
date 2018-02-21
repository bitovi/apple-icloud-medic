/* eslint-disable no-unused-vars */
const rp = require('request-promise');
const DSBaseClient = require('../ds-base-client');

class Service extends DSBaseClient {
  find (params) {
    return this.request('POST', params);
  }

  // get (id, params) {
  //   return Promise.resolve({
  //     id, text: `A new message with ID: ${id}!`
  //   });
  // }

  // create (data, params) {
  //   if (Array.isArray(data)) {
  //     return Promise.all(data.map(current => this.create(current)));
  //   }

  //   return Promise.resolve(data);
  // }

  // update (id, data, params) {
  //   return Promise.resolve(data);
  // }

  // patch (id, data, params) {
  //   return Promise.resolve(data);
  // }

  // remove (id, params) {
  //   return Promise.resolve({ id });
  // }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
