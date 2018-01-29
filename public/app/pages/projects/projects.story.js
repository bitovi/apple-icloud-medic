import React from 'react';
import { storiesOf } from '@storybook/react';
import ProjectsPage from './projects';

storiesOf('App Components', module)
  .addWithChapters('Page - Projects', {
    chapters: [{
      sections: [{
        sectionFn: () => (
          <ProjectsPage />
        )
      }]
    }]
  });
