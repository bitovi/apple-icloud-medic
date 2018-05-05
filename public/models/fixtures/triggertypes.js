import fixture from 'can-fixture';
import env from '@root/shared/env';
import TriggerTypes from '@public/models/triggertypes';
import mockServer from './mock-socket-server';
import data from './triggertypes.data';

function mock(){
  return data;
};

const url = `${env.API_BASE_URI}/triggertypes`;
const store = fixture.store(mock(), TriggerTypes.connection.algebra);
fixture(url, store);
mockServer.onFeathersService(url, store);

export default store;
