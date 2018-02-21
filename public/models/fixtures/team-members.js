import fixture from 'can-fixture';
import env from '@root/shared/env';
import TeamMembers from '@public/models/team-members/team-members';
import mockServer from './mock-socket-server';

function mock(){
  return [
    {firstName: 'Nikunj', lastName: 'Virani', avatarUrl: 'http://placekitten.com/g/200/200', teamId: 12345, projectId: 100, id: 101, userId: 101, emailAddress: 'nv@apple.com' },
    {firstName: 'Joe', lastName: 'Cananagh', avatarUrl: 'http://placekitten.com/g/200/200', teamId: 12345, projectId: 100, id: 102, userId: 102, emailAddress: 'jc@apple.com' },
    {firstName: 'Liz', lastName: 'Tom', avatarUrl: 'http://placekitten.com/g/200/200', teamId: 12345, projectId: 100, id: 103, userId: 103, emailAddress: 'lt@apple.com' },
    {firstName: 'Mick',  lastName: 'McGrath', avatarUrl: 'http://placekitten.com/g/200/200', teamId: 12345, projectId: 100, id: 104, userId: 104, emailAddress: 'mm@apple.com' },
    {firstName: 'Andrea', lastName: 'Alameida', avatarUrl: 'http://placekitten.com/g/200/200', teamId: 12345, projectId: 104, id: 105, userId: 105, emailAddress: 'aa@apple.com' },
    {firstName: 'Ryan', lastName: 'Wheale', avatarUrl: 'http://placekitten.com/g/200/200', teamId: 12345, projectId: 104, id: 106, userId: 106, emailAddress: 'rw@apple.com' },
    {firstName: 'Dev_Nickname', lastName: 'User', teamId: 12345, projectId: 100, id: 110, userId: 'dev_user@dev.apple.com', emailAddress: 'dev_user@dev.apple.com' }
  ];
}

const url = `${env.API_BASE_URI}/team-members`;
const store = fixture.store(mock(), TeamMembers.connection.algebra);
fixture(url, store);
mockServer.onFeathersService(url, store);

export default store;
