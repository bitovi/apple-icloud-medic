import fixture from 'can-fixture';
import env from '@root/shared/env';
import Projects from '@public/models/projects';
import ProjectContributors from '@public/models/project-contributors/project-contributors';
import mockServer from './mock-socket-server';

function mock(){
  let count = 20;
  const arr = [];
  const ordinals = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth'];
  while(count--) {
    arr.unshift({
      id: 100 + count,
      teamId: fixture.rand(1, 5),
      title: `${ordinals[(count+6)%6]} Project`,
      description:
        'This is a project description. Learn all about this project here. Wow! It is so exciting',
      rules: [],
      contributors: [],
      category: 'category'
    });
  }
  return arr;
}

const loadChildData = (projects) => Promise.all(
  projects.map(project => ProjectContributors.getList({
    projectId: project.id
  }).then(results => project.contributors = results))
);

Projects.connection.feathersService.hooks({
  after: {
    // Load the team members
    get: [(hook) => loadChildData([hook.result]).then(() => hook)]
  }
});

const url = `${env.API_BASE_URI}/projects`;
const store = fixture.store(mock(), Projects.connection.algebra);
fixture(url, store);
mockServer.onFeathersService(url, store);

export default store;
