const assert = require('assert');
const app = require('../../src/app');
const { API_BASE_URI } = require('../../shared/env');

describe('\'users\' service', () => {
  it('registered the service', () => {
    const service = app.service(`${API_BASE_URI}/users`);

    assert.ok(service, 'Registered the service');
  });
});
