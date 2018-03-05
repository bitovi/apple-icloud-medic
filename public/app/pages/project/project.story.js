import React from 'react';
import { storiesOf } from '@storybook/react';
import ProjectPage from './project';

storiesOf('App Components/Pages', module)
  .addWithChapters('Project', {
    chapters: [{
      sections: [{
        sectionFn: () => (
          <ProjectPage projectId={104} />
        )
      }, {
        title: 'New Project form',
        sectionFn: () => (
          <ProjectPage projectId="new" />
        )
      }]
    }]
  });
