import React from 'react';
import { storiesOf } from '@storybook/react';
import ProjectContributor from './project-contributor';
import TeamsModel from '@public/models/teams';

const team = {
  id: 1,
  name: 'iCloud',
  codeName: 'icloud',
  members: [{
    prsId: 101,
    firstName: 'Brian',
    lastName: 'Moschel',
    emailAddress: 'brian@bitovi.com',
  }, {
    prsId: 102,
    firstName: 'Justin',
    lastName: 'Meyer',
    emailAddress: 'justin@bitovi.com',
  }]
};

const contributor = {
  id: 1,
  userId: 102,
  projectId: 101
};

export default (makeAppComponent) => {
  const MockApp = makeAppComponent({
    team: {
      Type: TeamsModel,
      default: () => team
    }
  });

  storiesOf('Components', module)
    .addDecorator(story => <MockApp>{story()}</MockApp>)
    .addWithChapters('ProjectContributor', {
      chapters: [{
        sections: [{
          sectionFn: () => (
            <ProjectContributor contributor={contributor} />
          )
        }, {
          title: 'Load by ID',
          sectionFn: () => (
            <ProjectContributor id={401} isProjectAdmin={true} />
          )
        }]
      }]
    });
};
