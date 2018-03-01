import fixture from 'can-fixture';
import env from '@root/shared/env';
import Rules from '@public/models/rules';
import mockServer from './mock-socket-server';

function mock(){
  let count = 20; // number of projects
  const arr = [];
  while(count--) {
    let i = fixture.rand(2, 7);
    while(i--) {
      arr.unshift({
        id: 1 + 10 * count + i,
        title: 'Rule #' + count + i,
        description:
          'This is a rule description. Click the rule title for more information.',
        tags: [{ id: 1, title: 'rule_tag' }],
        enabled: Math.random() > 0.3,
        projectId: 100 + count
      });
    }
  }
  return arr;
}

const url = `${env.API_BASE_URI}/rules`;
const store = fixture.store(mock(), Rules.connection.algebra);
fixture(url, store);
mockServer.onFeathersService(url, store);

export default store;
