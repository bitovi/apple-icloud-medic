import React from 'react';
import { storiesOf } from '@storybook/react';
import TeamManagementPage from './team-management';

const teams = [{
  codeName: 'icloud',
  name: 'iCloud',
  id: '100',
  groupId: 1234,
  teamMembers:  [
    {firstName: 'Nikunj', lastName: 'V', permissions: 'admin', teamId: 100, id: 101, emailAddress: 'nv@apple.com', userId: 12345 },
    {firstName: 'Joe', lastName: 'C', permissions: 'admin', teamId: 100, id: 102, emailAddress: 'jc@apple.com', userId: 12346 },
    {firstName: 'Liz', lastName: 'T', permissions: 'admin', teamId: 100, id: 103, emailAddress: 'lt@apple.com', userId: 12347 },
    {firstName: 'Mick ', lastName: 'M', permissions: 'admin', teamId: 100, id: 104, emailAddress: 'mm@apple.com', userId: 12348 },
  ]
},
{
  codeName: 'medic-dev',
  name: 'Medic',
  id: '101',
  groupId: 1235,
  teamMembers:  [
    {firstName: 'Nikunj', lastName: 'V', permissions: 'admin', teamId: 100, id: 101, emailAddress: 'nv@apple.com', userId: 12349 },
    {firstName: 'Joe', lastName: 'C', permissions: 'admin', teamId: 100, id: 102, emailAddress: 'jc@apple.com', userId: 123410 },
    {firstName: 'Liz', lastName: 'T', permissions: 'admin', teamId: 100, id: 103, emailAddress: 'lt@apple.com', userId: 123411 },
    {firstName: 'Mick ', lastName: 'M', permissions: 'admin', teamId: 100, id: 104, emailAddress: 'mm@apple.com', userId: 123412 },
  ]
},
{
  codeName: 'itunes',
  name: 'iTunes',
  id: '102',
  groupId: 1236,
  teamMembers:  [
    {firstName: 'Nikunj', lastName: 'V', permissions: 'admin', teamId: 100, id: 101, emailAddress: 'nv@apple.com', userId: 12341 },
    {firstName: 'Joe', lastName: 'C', permissions: 'admin', teamId: 100, id: 102, emailAddress: 'jc@apple.com', userId: 12342 },
    {firstName: 'Liz', lastName: 'T', permissions: 'admin', teamId: 100, id: 103, emailAddress: 'lt@apple.com', userId: 12343 },
    {firstName: 'Mick', lastName: 'M', permissions: 'admin', teamId: 100, id: 104, emailAddress: 'mm@apple.com', userId: 12344 },
  ]
}];


export default () => {

  storiesOf('App Components/Pages', module)
    .addWithChapters('Team Management', {
      chapters: [{
        sections: [{
          sectionFn: () => <TeamManagementPage teams={teams}/>
        },{
          sectionFn: () => <TeamManagementPage teams={[]}/>
        }]
      }]
    });
};
