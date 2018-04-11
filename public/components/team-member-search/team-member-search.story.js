import React from 'react';
import { storiesOf } from '@storybook/react';
import TeamMemberSearch from './team-member-search';

const handleSelect = (teamMember) => {
  alert('You selected ' + teamMember.user.displayName);
};

storiesOf('Components', module)
  .addWithChapters('TeamMemberSearch', {
    chapters: [{
      sections: [{
        sectionFn: () => {
          return (<TeamMemberSearch query={{ teamId: 1 }} onResultSelect={handleSelect} isProjectAdmin={true} />);
        }
      }, {
        title: 'Disabled for non project admins',
        sectionFn: () => {
          return (<TeamMemberSearch query={{ teamId: 1 }} onResultSelect={handleSelect} />);
        }
      }]
    }]
  });
