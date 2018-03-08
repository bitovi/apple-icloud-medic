import React from 'react';
import { storiesOf } from '@storybook/react';
import ProjectsPage from './projects';

storiesOf('App Components/Pages', module)
  .addWithChapters('Projects', {
    chapters: [{
      sections: [{
        title: 'isEditing false state',
        sectionFn: () => (
          <ProjectsPage teamId={1} />
        )
      },
      {
        title: 'isEditing true state',
        sectionFn: () => (
          <ProjectsPage teamId={2} isEditing='true'/>
        )
      },
      {
        title: 'success message',
        sectionFn: () => (
          <ProjectsPage teamId={2} message='Project sucessfully saved.'/>
        )
      }]
    }]
  });
