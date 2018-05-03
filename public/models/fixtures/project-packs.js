import fixture from 'can-fixture';
import env from '@root/shared/env';
import ProjectPacks from '@public/models/project-packs';
import ProjectsStore from './projects';
import PacksStore from './projects';
import mockServer from './mock-socket-server';

function createData(){
  let count = 1;
  Promise.all([
    ProjectsStore.getList({}),
    PacksStore.getList({})
  ]).then(results => {
    const _projects = results[0].data;
    const _packs = results[1].data;

    _projects.forEach(project => {
      const packs = fixture.rand(_packs, 10);
      packs.forEach(pack => {
        new ProjectPacks({
          id: count++,
          projectId: project.id,
          packId: pack.id,
          project,
          pack
        }).save();
      });
    });
  });
}

const url = `${env.API_BASE_URI}/project-packs`;
const store = fixture.store([], ProjectPacks.connection.algebra);
fixture(url, store);
mockServer.onFeathersService(url, store);

createData();

export default store;
