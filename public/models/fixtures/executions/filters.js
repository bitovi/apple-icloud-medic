import fixture from 'can-fixture';
import env from '@root/shared/env';
import data_filters from './data/execution-filters';
import mockServer from '../mock-socket-server';
import canSet from 'can-set';

const store = fixture.store([data_filters], new canSet.Algebra({}));

const url = `${env.API_BASE_URI}/execution-filters`;
mockServer.onFeathersService(url, store);

export default store;
