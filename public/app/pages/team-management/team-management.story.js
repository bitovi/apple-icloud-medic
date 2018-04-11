import React from 'react';
import { storiesOf } from '@storybook/react';
import TeamManagementPage from './team-management';

export default () => {

  storiesOf('App Components/Pages', module)
    .addWithChapters('Team Management', {
      chapters: [{
        sections: [{
          sectionFn: () => <TeamManagementPage />
        }]
      }]
    });
};
