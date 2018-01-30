import React from 'react';
import { storiesOf } from '@storybook/react';
import UserSettingsDropdown from './user-settings-dropdown';

storiesOf('Components', module)
  .addWithChapters('User Settings Dropdown', {
    chapters: [{
      sections: [{
        title: 'Default use',
        sectionFn: () => (
          <UserSettingsDropdown />
        )
      }]
    }]
  });
