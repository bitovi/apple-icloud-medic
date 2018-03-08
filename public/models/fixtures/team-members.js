import fixture from 'can-fixture';
import env from '@root/shared/env';
import TeamMembers from '@public/models/team-members/team-members';
import mockServer from './mock-socket-server';

const users = [
  { prsId: 101, firstName: 'Nikunj', lastName: 'Virani', emailAddress: 'nv@apple.com' },
  { prsId: 102, firstName: 'Joe', lastName: 'Cananagh', emailAddress: 'jc@apple.com' },
  { prsId: 103, firstName: 'Liz', lastName: 'Tom', emailAddress: 'lt@apple.com' },
  { prsId: 104, firstName: 'Mick',  lastName: 'McGrath', emailAddress: 'mm@apple.com' },
  { prsId: 105, firstName: 'Andrea', lastName: 'Alameida', emailAddress: 'aa@apple.com' },
  { prsId: 106, firstName: 'Ryan', lastName: 'Wheale', emailAddress: 'rw@apple.com' },
  { prsId: 107, firstName: 'Dev', lastName: 'User', emailAddress: 'dev_user@dev.apple.com' }
];

function mock() {
  let count = 5; // number of teams
  const arr = [];
  while(count--) {
    // For ease of testing, assign all users to all teams (groups)
    Array.prototype.push.apply(arr, users.map(user => Object.assign({
      groupId: 10001 + count
    }, user)));
  }
  return arr;
}

const url = `${env.API_BASE_URI}/team-members`;
const store = fixture.store(mock(), TeamMembers.connection.algebra);
fixture(url, store);
mockServer.onFeathersService(url, store);

export default store;
