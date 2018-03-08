import React from 'react';
import { storiesOf } from '@storybook/react';
import ProjectCard from './project-card';

const project = {
  id: 1234,
  title: 'Sample project name',
  description: 'This is the project description'
};

storiesOf('Components', module)
  .addWithChapters('ProjectCard', {
    chapters: [{
      sections: [{
        title: 'Passing just the ID',
        sectionFn: () => (
          <ProjectCard id={100}/>
        )
      }, {
        title: 'Passing data directly',
        sectionFn: () => (
          <ProjectCard project={project}/>
        )
      }]
    }]
  });
