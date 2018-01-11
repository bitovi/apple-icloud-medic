import React from 'react';
import { storiesOf } from '@storybook/react';
import TeamDropdown from './team-dropdown';

storiesOf('Components', module)
  .addWithChapters('Team Dropdown', {
    chapters: [{
      sections: [{
        title: 'Default use',
        sectionFn: () => (
          <TeamDropdown />
        )
      }]
    }]
  });
