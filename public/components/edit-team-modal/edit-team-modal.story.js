import React from 'react';
import { storiesOf } from '@storybook/react';
import EditTeamModal from './edit-team-modal';

const team = {
  codeName: 'medic-dev',
  groupId: '12345',
  name: 'Medic',
  members: [
    {}
  ]
};

storiesOf('Components', module)
  .addWithChapters('EditTeamModal', {
    chapters: [{
      sections: [{
        title: 'Edit existing team',
        sectionFn: () => (
          <EditTeamModal isNew='false' team={team}/>
        )
      },{
        title: 'New team',
        sectionFn: () => (
          <EditTeamModal isNew='true'/>
        )
      }]
    }]
  });
