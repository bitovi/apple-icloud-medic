import React from 'react';
import { storiesOf } from '@storybook/react';
import ProjectPage from './project';

export default (makeAppComponent) => {
  const MockApp = makeAppComponent({
    team: { id: 100 }
  });

  storiesOf('App Components/Pages', module)
    .addDecorator(story => <MockApp>{story()}</MockApp>)
    .addWithChapters('Project', {
      chapters: [{
        sections: [{
          sectionFn: () => (
            <ProjectPage projectId={104} />
          )
        },
        {
          title: 'New Project form',
          sectionFn: () => (
            <ProjectPage  projectId="new" />
          )
        }]
      }]
    });
};
