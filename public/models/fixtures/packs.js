import fixture from 'can-fixture';
import env from '@root/shared/env';
import Packs from '@public/models/packs';
import mockServer from './mock-socket-server';

function mock(){
  let count = 50;
  const arr = [];
  while(count--) {
    arr.unshift({
      id: `pack_${count + 1}`,
      name: `Pack #${count + 1}`,
      email: 'foo_bar@bang.biz',
      color: '#' + ('000000' + Math.random().toString(16).slice(2, 8)).slice(-6)
    });
  }
  return arr;
}

const url = `${env.API_BASE_URI}/packs`;
const store = fixture.store(mock(), Packs.connection.algebra);
fixture(url, store);
mockServer.onFeathersService(url, store);

export default store;
