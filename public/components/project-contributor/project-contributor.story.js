import React from 'react';
import { storiesOf } from '@storybook/react';
import ProjectContributor from './project-contributor';

const contributor = {
  id: 102,
  name: 'Liz Tom',
  permissions: 'admin',
  avatarUrl: 'https://placekitten.com/g/200/200'
};

storiesOf('Components', module)
  .addWithChapters('ProjectContributor', {
    chapters: [{
      sections: [{
        sectionFn: () => (
          <ProjectContributor contributor={contributor}/>
        )
      }, {
        title: 'Load by ID',
        sectionFn: () => (
          <ProjectContributor id={102}/>
        )
      }]
    }]
  });
