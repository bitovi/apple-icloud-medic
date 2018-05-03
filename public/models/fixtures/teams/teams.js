import fixture from 'can-fixture';
import env from '@root/shared/env';
import Teams from '@public/models/teams';
import TeamMembers from '@public/models/team-members/team-members';
import mockServer from '../mock-socket-server';

const teamNames = ['Medic', 'Mail', 'iCloud', 'Maps', 'iTunes', 'PIE'];

const values = teamNames.map((name, i) => {
  // NOTE: other fixtures rely on the number of teams and sequential IDs/groupIds
  // NOTE: team members are added using an "after" hook (below). This mimics the server behavior.
  return {
    id: i + 1,
    groupId: 10001 + i,
    name: `${name} team`,
    codeName: name.toLowerCase()
  };
});

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
export { values };
