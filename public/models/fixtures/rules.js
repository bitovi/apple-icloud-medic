import fixture from 'can-fixture';
import env from '@root/shared/env';
import Rules from '@public/models/projects';
import mockServer from './mock-socket-server';

function mock(){
  let count = 100;
  const arr = [];
  while(count--) {
    arr.unshift({
      title: 'Rule #' + count,
      description:
        'This is a rule description. Click the rule title for more information.',
      tags: [{ id: 1, title: 'rule_tag' }],
      enabled: Math.random() > 0.7,
      projectId: 100 + Math.round(count/5),
      id: 100 + count
    });
  }
  return arr;
}

const url = `${env.API_BASE_URI}/rules`;
const store = fixture.store(mock(), Rules.connection.algebra);
fixture(url, store);
mockServer.onFeathersService(url, store);

export default store;
