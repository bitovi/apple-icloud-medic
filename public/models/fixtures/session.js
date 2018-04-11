import makeDebug from 'debug';
import mockServer from './mock-socket-server';

const debug = makeDebug('medic:session:authentication');

// The Session model emits an 'authenticate' event, analogous to
// a POST request to create a session with feathers. `data` will be
// an object with a `strategy` property (passport) and any other data needed by
// the specified strategy (eg. username/password for "local" strategy)
mockServer.on('authenticate', (data, callback) => {
  debug('Mocking authentication response');
  const payload = {
    // NOTE: The following JWT body contains personId: 101 (which should match a fixture user personId)
    // This JWT was generated at https://jwt.io/ using the secret "medic-secret"
    // You should be able to paste this JWT to that website to see the payload.
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJ1c2VySWQiOjEwMX0.1SzXHc4sW2EvwVRrlQfVc9t87iR29dpOGmX7-MbLw3s'
  };
  callback(null, payload);
});
