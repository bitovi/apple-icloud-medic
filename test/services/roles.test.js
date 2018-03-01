const assert = require('assert');
const app = require('../../src/app');
const { API_BASE_URI } = require('../../shared/env');

describe('\'roles\' service', () => {
  it('registered the service', () => {
    const service = app.service(`${API_BASE_URI}/roles`);

    assert.ok(service, 'Registered the service');
  });
});
