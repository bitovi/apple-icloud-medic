import fixture from 'can-fixture';
import env from '@root/shared/env';
import Teams from '@public/models/teams';
import mockServer from '../mock-socket-server';

const values = [
  { id: 1, name: 'Mail team', codeName: 'mail' },
  { id: 2, name: 'iCloud team', codeName: 'icloud' },
  { id: 3, name: 'Maps team', codeName: 'maps' },
  { id: 4, name: 'iTunes team', codeName: 'itunes' },
  { id: 5, name: 'PIE team', codeName: 'pie' }
];

const url = `${env.API_BASE_URI}/teams`;
const store = fixture.store(values, Teams.connection.algebra);
fixture(url, store);
mockServer.onFeathersService(url, store);

export default store;
