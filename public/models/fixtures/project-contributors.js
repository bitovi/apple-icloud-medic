import fixture from 'can-fixture';
import env from '@root/shared/env';
import ProjectContributors from '@public/models/project-contributors/project-contributors';
import mockServer from './mock-socket-server';

function mock(){
  return [
    {name: 'Nikunj Virani', avatarUrl: 'http://placekitten.com/g/200/200', permissions: 'admin', projectId: 100, id: 101, userId: 101 },
    {name: 'Joe Cananagh', avatarUrl: 'http://placekitten.com/g/200/200', permissions: 'admin', projectId: 100, id: 102, userId: 102 },
    {name: 'Liz Tom', avatarUrl: 'http://placekitten.com/g/200/200', permissions: 'admin', projectId: 100, id: 103, userId: 103 },
    {name: 'Mick McGrath', avatarUrl: 'http://placekitten.com/g/200/200', permissions: 'admin', projectId: 100, id: 104, userId: 104 },
    {name: 'Andrea Periera de Alameida', avatarUrl: 'http://placekitten.com/g/200/200', permissions: 'admin', projectId: 101, id: 105, userId: 105 },
    {name: 'Ryan Wheale', avatarUrl: 'http://placekitten.com/g/200/200', permissions: 'admin', projectId: 101, id: 106, userId: 106 },
  ];
}

const url = `${env.API_BASE_URI}/contributors`;
const store = fixture.store(mock(), ProjectContributors.connection.algebra);
fixture(url, store);
mockServer.onFeathersService(url, store);

export default store;
