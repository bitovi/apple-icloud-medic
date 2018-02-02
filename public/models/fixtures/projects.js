import fixture from 'can-fixture';
import env from '@root/shared/env';
import Projects from '@public/models/projects';
import mockServer from './mock-socket-server';

function mock(){
  let count = 100;
  const arr = [];
  const ordinals = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth'];
  while(count--) {
    arr.unshift({
      title: `${ordinals[(count+6)%6]} Project`,
      description:
        'This is a project description. Learn all about this project here. Wow! It is so exciting',
      rules: [1, 2, 3],
      contributions: [4, 5, 6],
      category: 'category',
      id: 100 + count
    });
  }
  return arr;
}

const url = `${env.API_BASE_URI}/projects`;
const store = fixture.store(mock(), Projects.connection.algebra);
fixture(url, store);
mockServer.onFeathersService(url, store);

export default store;
