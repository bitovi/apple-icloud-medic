import React from 'react';
import { storiesOf } from '@storybook/react';
import TeamMembersList from './team-members-list';

storiesOf('Components', module)
  .addWithChapters('Team Members List', {
    chapters: [{
      sections: [{
        sectionFn: () => (
          <TeamMembersList query={{ teamId: 1 }}/>
        )
      }]
    }]
  });
