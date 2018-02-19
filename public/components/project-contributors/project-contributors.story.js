import React from 'react';
import { storiesOf } from '@storybook/react';
import ProjectContributors from './project-contributors';

storiesOf('Components', module)
  .addWithChapters('ProjectContributors', {
    chapters: [{
      sections: [{
        title: 'Default use',
        sectionFn: () => (
          <ProjectContributors projectId={100}/>
        )
      }]
    }]
  });
