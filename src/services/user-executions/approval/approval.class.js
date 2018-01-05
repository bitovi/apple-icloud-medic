const BaseClient = require('../../st2-base-client');
const jwt = require('jsonwebtoken');

class Executions extends BaseClient {
  create (data, params) {
    return this.request('POST', params, {
      action: this.config.receiveAction,
      parameters: {
        approval_type: data.approval_type,
        execution_id: data.execution_id,
        jwt_token: jwt.sign({ executionId: data.execution_id, r: Math.random() }, this.config.secret, { expiresIn: '20s' })
      }
    });
  }
}

module.exports = function (options) {
  return new Executions(options);
};

module.exports.Service = Executions;
