import fixture from 'can-fixture';
import env from '@root/shared/env';
import ProjectContributors from '@public/models/project-contributors/project-contributors';
import mockServer from './mock-socket-server';

const PERMS = ['ro-user', 'rw-user', 'admin'];

function mock(){
  let count = 20; // number of projects
  const arr = [];
  while(count--) {
    let n = fixture.rand(2, 7);
    while(n--) {
      arr.push({
        id: 401 + (10*count) + n,
        projectId: 101 + count,
        userId: 101 + n,
        permissions: fixture.rand(PERMS, 1)[0]
      });
    }
  }
  return arr;
}

const url = `${env.API_BASE_URI}/project-contributors`;
const store = fixture.store(mock(), ProjectContributors.connection.algebra);
fixture(url, store);
mockServer.onFeathersService(url, store);

export default store;
