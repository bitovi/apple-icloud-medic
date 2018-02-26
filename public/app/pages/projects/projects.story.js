import React from 'react';
import { storiesOf } from '@storybook/react';
import ProjectsPage from './projects';

storiesOf('App Components/Pages', module)
  .addWithChapters('Projects', {
    chapters: [{
      sections: [{
        title: 'isEditing false state',
        sectionFn: () => (
          <ProjectsPage />
        )
      },
      {
        title: 'isEditing true state',
        sectionFn: () => (
          <ProjectsPage isEditing='true'/>
        )
      },
      {
        title: 'success message',
        sectionFn: () => (
          <ProjectsPage message='Project sucessfully saved.'/>
        )
      }]
    }]
  });
