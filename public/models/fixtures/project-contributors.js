import fixture from 'can-fixture';
import env from '@root/shared/env';
import ProjectContributors from '@public/models/project-contributors/project-contributors';
import mockServer from './mock-socket-server';

const contributors = [
  {firstName: 'Nikunj', lastName: 'Virani', avatarUrl: 'http://placekitten.com/g/200/200', permissions: 'admin', userId: 101, emailAddress: 'nv@apple.com' },
  {firstName: 'Joe', lastName: 'Cananagh', avatarUrl: 'http://placekitten.com/g/200/200', permissions: 'admin', userId: 102, emailAddress: 'jc@apple.com' },
  {firstName: 'Liz', lastName: 'Tom', avatarUrl: 'http://placekitten.com/g/200/200', permissions: 'admin', userId: 103, emailAddress: 'lt@apple.com' },
  {firstName: 'Mick',  lastName: 'McGrath', avatarUrl: 'http://placekitten.com/g/200/200', permissions: 'admin', userId: 104, emailAddress: 'mm@apple.com' },
  {firstName: 'Andrea', lastName: 'Alameida', avatarUrl: 'http://placekitten.com/g/200/200', permissions: 'admin', userId: 105, emailAddress: 'aa@apple.com' },
  {firstName: 'Ryan', lastName: 'Wheale',avatarUrl: 'http://placekitten.com/g/200/200', permissions: 'admin', userId: 106, emailAddress: 'rw@apple.com' },
];

function mock(){
  let count = 20; // number of projects
  const arr = [];
  while(count--) {
    const data = fixture.rand(contributors).map((pc, i) => Object.assign({
      id: 10 * count + i,
      projectId: 100 + count
    }, pc));
    Array.prototype.push.apply(arr, data);
  }
  return arr;
}

const url = `${env.API_BASE_URI}/project-contributors`;
const store = fixture.store(mock(), ProjectContributors.connection.algebra);
fixture(url, store);
mockServer.onFeathersService(url, store);

export default store;
