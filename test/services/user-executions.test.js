const assert = require('assert');
const app = require('../../src/app');

describe('\'user-executions\' service', () => {
  it('registered the service', () => {
    const service = app.service('user-executions');

    assert.ok(service, 'Registered the service');
  });
});
