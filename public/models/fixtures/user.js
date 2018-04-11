import fixture from 'can-fixture';
import env from '@root/shared/env';
import UserModel from '@public/models/user';
import Session from '@public/models/session';
import mockServer from './mock-socket-server';

const ID_PROP = UserModel.connection.idProp;

const users = [
  { personId: 101, isSuperAdmin: true, firstName: 'Dev', lastName: 'User', emailAddress: 'dev_user@dev.apple.com' },
  { personId: 102, isSuperAdmin: false, firstName: 'Joe', lastName: 'Cananagh', emailAddress: 'jc@apple.com' },
  { personId: 103, isSuperAdmin: true, firstName: 'Liz', lastName: 'Tom', emailAddress: 'lt@apple.com' },
  { personId: 104, isSuperAdmin: true, firstName: 'Mick',  lastName: 'McGrath', emailAddress: 'mm@apple.com' },
  { personId: 105, isSuperAdmin: false, firstName: 'Andrea', lastName: 'Alameida', emailAddress: 'aa@apple.com' },
  { personId: 106, isSuperAdmin: false, firstName: 'Ryan', lastName: 'Wheale', emailAddress: 'rw@apple.com' },
  { personId: 107, isSuperAdmin: true, firstName: 'Nikunj', lastName: 'Virani', emailAddress: 'nv@apple.com' },
].map(user => {
  user.displayName = user.nickName || user.firstName + ' ' + user.lastName;
  return user;
});

const url = `${env.API_BASE_URI}/users`;
const store = fixture.store(users, UserModel.connection.algebra);

// We allow for a special "me" parameter to signify the current user
const originalGetData = store.getData;
store.getData = function (req) {
  if (req.data && req.data[ID_PROP] === 'me') {
    req.data[ID_PROP] = Session.current && Session.current.personId;
  }
  return originalGetData.apply(store, arguments);
};

fixture(url, store);
mockServer.onFeathersService(url, store, { id: ID_PROP });

export default store;
