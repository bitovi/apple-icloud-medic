import fixture from 'can-fixture';
import env from '@root/shared/env';
import TeamMembers from '@public/models/team-members/team-members';
import User from '@public/models/user';
import mockServer from './mock-socket-server';

const PERMISSIONS = ['ro-user', 'rw-user', 'admin'];

function mock() {
  let teamCount = 6; // number of fixture teams
  const arr = [];
  while(teamCount--) {
    // To keep things easy, we assign all users to all teams
    // This makes it easier to mock project contributors.
    let userCount = 7; // number of fixture users
    while (userCount--) {
      // NOTE: The teams fixture loads team members on demand (based on teamId).
      arr.push({
        id: teamCount * 100 + userCount,
        personId: 101 + userCount, // must match user.personId
        teamId: 1 + teamCount, // must match teamIds
        permissions: fixture.rand(PERMISSIONS, 1)[0],
      });
    }
  }
  return arr;
}

const loadUsers = (teamMembers) => Promise.all(
  teamMembers.map(member => {
    return User.get({
      [User.connection.idProp]: member.personId
    }).then(result => member.user = result);
  })
);

TeamMembers.connection.feathersService.hooks({
  after: {
    // Load the users for team members
    get: [(hook) => loadUsers([hook.result]).then(() => hook)],
    find: [(hook) => loadUsers(hook.result.data).then(() => hook)]
  }
});

const url = `${env.API_BASE_URI}/team-members`;
const store = fixture.store(mock(), TeamMembers.connection.algebra);
fixture(url, store);
mockServer.onFeathersService(url, store);

export default store;
