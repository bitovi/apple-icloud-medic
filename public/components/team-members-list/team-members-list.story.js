import React from 'react';
import { storiesOf } from '@storybook/react';
import TeamMembersList from './team-members-list';

const teamMembers = [
  {firstName: 'Nikunj', lastName: 'V', permissions: 'admin', teamId: 100, id: 101, emailAddress: 'nv@apple.com', userId: 12341 },
  {firstName: 'Joe', lastName: 'C', permissions: 'read-only', teamId: 100, id: 102, emailAddress: 'jc@apple.com', userId: 12342 },
  {firstName: 'Liz', lastName: 'T', permissions: 'admin', teamId: 100, id: 103, emailAddress: 'lt@apple.com', userId: 12343 },
  {firstName: 'Mick', lastName: 'M', permissions: 'read-write', teamId: 100, id: 104, emailAddress: 'mm@apple.com', userId: 12344 },
];

storiesOf('Components', module)
  .addWithChapters('Team Members List', {
    chapters: [{
      sections: [{
        title: 'Default use',
        sectionFn: () => (
          <TeamMembersList teamMembers={teamMembers}/>
        )
      }]
    }]
  });
