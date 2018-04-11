import fixture from 'can-fixture';
import env from '@root/shared/env';
import Teams from '@public/models/teams';
import TeamMembers from '@public/models/team-members/team-members';
import mockServer from '../mock-socket-server';

const values = [
  { id: 1, groupId: 10001, name: 'Mail team', codeName: 'mail' },
  { id: 2, groupId: 10002, name: 'iCloud team', codeName: 'icloud' },
  { id: 3, groupId: 10003, name: 'Maps team', codeName: 'maps' },
  { id: 4, groupId: 10004, name: 'iTunes team', codeName: 'itunes' },
  { id: 5, groupId: 10005, name: 'PIE2 team', codeName: 'pie' },
  { id: 6, groupId: 10006, name: 'Medic team', codeName: 'medic' },
  // NOTE: other fixtures rely on the number of teams and sequential IDs/groupIds
  // NOTE: team members are added using an "after" hook (below). This mimics the server behavior.
];

const loadTeamMembers = (teams) => Promise.all(
  teams.map(team => TeamMembers.getList({
    teamId: team.id
  }).then(results => team.members = results))
);

Teams.connection.feathersService.hooks({
  after: {
    // Load the team members
    get: [(hook) => loadTeamMembers([hook.result]).then(() => hook)],
    find: [(hook) => loadTeamMembers(hook.result.data).then(() => hook)]
  }
});

const url = `${env.API_BASE_URI}/teams`;
const store = fixture.store(values, Teams.connection.algebra);
fixture(url, store);
mockServer.onFeathersService(url, store);

export default store;
