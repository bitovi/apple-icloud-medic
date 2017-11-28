const env = require('../../../../shared/env');
const errors = require('feathers-errors');

const APPROVAL_TYPES = {
  'approve': {
    status: 'approved'
  },
  'cancel': {
    status: 'cancelled'
  }
};
const APPROVAL_KEYS = Object.keys(APPROVAL_TYPES).join(', ');

module.exports = {
  before: {
    create: [(hook) => {
      const data = hook.data;
      if (!data.approval_type || !APPROVAL_TYPES[data.approval_type]) {
        return Promise.reject(new errors.BadRequest(`Must specify a valid approval_type: ${APPROVAL_KEYS}`));
      }
      if (!data.execution_id) {
        return Promise.reject(new errors.BadRequest(`Must specify an execution_id`));
      }
      return Promise.resolve(hook);
    }]
  },

  after: {
    create: [(hook) => {
      const userExecutionsSvc = hook.app.service(`${env.API_BASE_URI}/user-executions`);
      const status = APPROVAL_TYPES[hook.data.approval_type].status;
      return userExecutionsSvc.patch(hook.params.userExecutionId, {
        status
      }).then(() => hook);
    }]
  },

  error: {
    create: []
  }
};
