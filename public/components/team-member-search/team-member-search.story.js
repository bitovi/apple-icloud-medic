import React from 'react';
import { storiesOf } from '@storybook/react';
import TeamMemberSearch from './team-member-search';


storiesOf('Components', module)
  .addWithChapters('TeamMemberSearch', {
    chapters: [{
      sections: [{
        title: 'Default use',
        sectionFn: () => {
          return (<TeamMemberSearch teamId={100} handleResultSelect={alert.bind(window)}/>);
        }
      }]
    }]
  });
