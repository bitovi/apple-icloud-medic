import React from 'react';
import { storiesOf } from '@storybook/react';
import ProjectContributor from './project-contributor';

storiesOf('Components', module)
  .addWithChapters('ProjectContributor', {
    chapters: [{
      sections: [{
        title: 'Default use',
        sectionFn: () => (
          <ProjectContributor contributorId={102}/>
        )
      }]
    }]
  });
