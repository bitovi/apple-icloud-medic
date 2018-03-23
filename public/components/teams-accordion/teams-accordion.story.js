import React from 'react';
import { storiesOf } from '@storybook/react';
import TeamsAccordion from './teams-accordion';

const teams = [{
  codeName: 'icloud',
  name: 'icloud',
  id: '100',
  teamMembers:  [
    {firstName: 'Nikunj', lastName: 'V', permissions: 'admin', teamId: 100, id: 101, emailAddress: 'nv@apple.com', userId: 12341 },
    {firstName: 'Joe', lastName: 'C', permissions: 'admin', teamId: 100, id: 102, emailAddress: 'jc@apple.com', userId: 12342 },
    {firstName: 'Liz', lastName: 'T', permissions: 'admin', teamId: 100, id: 103, emailAddress: 'lt@apple.com', userId: 12343 },
    {firstName: 'Mick', lastName: 'M', permissions:'read-write', teamId: 100, id: 104, emailAddress: 'mm@apple.com', userId: 12344 },
  ]
},
{
  codeName: 'Medic',
  name: 'medic',
  id: '101',
  teamMembers:  [
    {firstName: 'Nikunj', lastName: 'V', permissions: 'read-only', teamId: 100, id: 101, emailAddress: 'nv@apple.com', userId: 12341 },
    {firstName: 'Joe', lastName: 'C', permissions: 'admin', teamId: 100, id: 102, emailAddress: 'jc@apple.com', userId: 12342 },
    {firstName: 'Liz', lastName: 'T', permissions: 'read-write', teamId: 100, id: 103, emailAddress: 'lt@apple.com', userId: 12343 },
    {firstName: 'Mick', lastName: 'M', permissions: 'admin', teamId: 100, id: 104, emailAddress: 'mm@apple.com', userId: 12344 },
  ]
},
{
  codeName: 'Mail',
  name: 'mail',
  id: '102',
  teamMembers:  [
    {firstName: 'Nikunj', lastName: 'V', permissions: 'admin', teamId: 100, id: 101, emailAddress: 'nv@apple.com', userId: 12341 },
    {firstName: 'Joe', lastName: 'C', permissions: 'read-only', teamId: 100, id: 102, emailAddress: 'jc@apple.com', userId: 12342 },
    {firstName: 'Liz', lastName: 'T', permissions: 'admin', teamId: 100, id: 103, emailAddress: 'lt@apple.com', userId: 12343 },
    {firstName: 'Mick', lastName: 'M', permissions: 'read-write', teamId: 100, id: 104, emailAddress: 'mm@apple.com', userId: 12344 },
  ]
}];

storiesOf('Components', module)
  .addWithChapters('Teams Accordion', {
    chapters: [{
      sections: [{
        title: 'Default use',
        sectionFn: () => (
          <TeamsAccordion teams={teams}/>
        )
      },
      {
        title: 'No teams state',
        sectionFn: () => (
          <TeamsAccordion teams={[]}/>
        )
      }]
    }]
  });
