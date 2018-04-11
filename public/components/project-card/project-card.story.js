import React from 'react';
import { storiesOf } from '@storybook/react';
import ProjectCard from './project-card';

storiesOf('Components', module)
  .addWithChapters('ProjectCard', {
    chapters: [{
      sections: [{
        title: 'Passing just the ID',
        sectionFn: () => (
          <ProjectCard id={100}/>
        )
      }]
    }]
  });
