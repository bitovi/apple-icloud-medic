import React from 'react';
import { storiesOf } from '@storybook/react';
import ProjectCards from './project-cards';

storiesOf('Components', module)
  .addWithChapters('Project Cards', {
    chapters: [{
      sections: [{
        sectionFn: () => (
          <ProjectCards/>
        )
      }]
    }]
  });
