import fixture from 'can-fixture';
import env from '@root/shared/env';
import Actions from '@public/models/actions';
import mockServer from './mock-socket-server';
import data from './actions.data';

function mock() {
  return data;
}

const url = `${env.API_BASE_URI}/actions`;
const store = fixture.store(mock(), Actions.connection.algebra);
fixture(url, store);
mockServer.onFeathersService(url, store);

export default store;
