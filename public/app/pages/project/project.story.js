import React from 'react';
import { storiesOf } from '@storybook/react';
import ProjectPage from './project';

storiesOf('App Components', module)
  .addWithChapters('Page - Project', {
    chapters: [{
      sections: [{
        title: 'Default use',
        sectionFn: () => (
          <ProjectPage projectId={104} />
        )
      },
      {
        title: 'Contributors tab',
        sectionFn: () => (
          <ProjectPage projectId={104} selectedTabId='contributors'/>
        )
      }]
    }]
  });
