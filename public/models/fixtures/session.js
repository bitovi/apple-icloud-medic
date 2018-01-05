import makeDebug from 'debug';
import fixture from 'can-fixture';
import env from '@root/shared/env';
import Session from '@public/models/session';
import UserModel from '@public/models/user';
import mockServer from './mock-socket-server';

const debug = makeDebug('medic:session:authentication');
const ID_PROP = UserModel.connection.idProp;

const user = {
  firstName: 'Dev',
  lastName: 'User',
  nickName: 'Dev_Nickname',
  emailAddress: 'dev_user@dev.apple.com',
  allGroups: [1234],
  displayName: 'Dev_Nickname User',
  isSuperAdmin: true
};

// The Session model emits an 'authenticate' event, analogous to
// a POST request to create a session with feathers. `data` will be
// an object with a `strategy` property (passport) and any other data needed by
// the specified strategy (eg. username/password for "local" strategy)
mockServer.on('authenticate', (data, callback) => {
  debug('Mocking authentication response');
  const payload = {
    // NOTE: The body should contain a userId property.
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyIsInR5cGUiOiJhY2Nlc3MifQ.eyJ1c2VySWQiOiJkZXZfdXNlckBkZXYuYXBwbGUuY29tIiwiaWF0IjoxNTE1MDgzMzM0LCJleHAiOjE1MTUwOTA1MzQsImF1ZCI6Imh0dHBzOi8vbWVkaWMuYXBwbGUuY29tIiwiaXNzIjoiZmVhdGhlcnMiLCJzdWIiOiJBcHBsZURTVXNlcnMiLCJqdGkiOiJjZDg0ZTBiNi0xYzkzLTQzODEtYWY4Yy03YjEyMDkxMzQyNTkifQ.KTi7zpMTDsh0aNlI2dvWtckW_cAdDKh9ZcnE0IEtLVg',
    user
  };
  callback(null, payload);
});

const url = `${env.API_BASE_URI}/users`;
const store = fixture.store([user], UserModel.connection.algebra);

// We allow for a special "me" parameter to signify the current user
const originalGetData = store.getData;
store.getData = function (req) {
  debug('User store - loading user', req.data);
  if (req.data && req.data[ID_PROP] === 'me') {
    debug('User store - loading "me" user', Session.current);
    req.data[ID_PROP] = Session.current && Session.current.userId;
  }
  return originalGetData.apply(store, arguments);
};

fixture(url, store);
mockServer.onFeathersService(url, store, { id: ID_PROP });
