import fixture from 'can-fixture';
import env from '@root/shared/env';
import ProjectContributors from '@public/models/project-contributors/project-contributors';
import User from '@public/models/user';
import mockServer from './mock-socket-server';

const PERMS = ['ro-user', 'rw-user', 'admin'];

function mock(){
  let teamCount = 20; // number of projects
  const userCount = 7; // number of users
  const arr = [];
  while(teamCount--) {
    let n = fixture.rand(2, userCount);
    while(n--) {
      arr.push({
        id: (401 * teamCount) + n,
        projectId: 101 + teamCount,
        personId: 101 + n,
        permissions: fixture.rand(PERMS, 1)[0]
      });
    }
  }
  return arr;
}

const loadUsers = (contributors) => Promise.all(
  ([].concat(contributors)).map(contributor => {
    return User.get({
      [User.connection.idProp]: contributor.personId
    }).then(result => contributor.user = result);
  })
);

ProjectContributors.connection.feathersService.hooks({
  after: {
    // Load the users for team members
    get: [(hook) => loadUsers(hook.result).then(() => hook)],
    find: [(hook) => loadUsers(hook.result.data).then(() => hook)]
  }
});

const url = `${env.API_BASE_URI}/project-contributors`;
const store = fixture.store(mock(), ProjectContributors.connection.algebra);
fixture(url, store);
mockServer.onFeathersService(url, store);

export default store;
