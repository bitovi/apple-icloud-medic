import React from 'react';
import { storiesOf } from '@storybook/react';
import ProjectContributor from './project-contributor';

storiesOf('Components', module)
  .addWithChapters('ProjectContributor', {
    chapters: [{
      sections: [{
        sectionFn: () => (
          <ProjectContributor id={401} />
        )
      }, {
        title: 'Project Admin view',
        sectionFn: () => (
          <ProjectContributor id={401} isProjectAdmin={true} />
        )
      }]
    }]
  });
