import fixture from 'can-fixture';
import env from '@root/shared/env';
import Triggers from '@public/models/triggers';
import mockServer from './mock-socket-server';
import data from './triggers.data';

function mock(){
  return data;
};

const url = `${env.API_BASE_URI}/triggers`;
const store = fixture.store(mock(), Triggers.connection.algebra);
fixture(url, store);
mockServer.onFeathersService(url, store);

export default store;
