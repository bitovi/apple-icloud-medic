import React from 'react';
import { storiesOf } from '@storybook/react';
import TeamDropdown from './team-dropdown';

export default (makeAppComponent) => {
  const MockApp = makeAppComponent({
    teamName: {
      default: 'icloud'
    }
  });

  storiesOf('Components', module)
    .addDecorator(story => <MockApp>{story()}</MockApp>)
    .addWithChapters('Team Dropdown', {
      chapters: [{
        sections: [{
          title: 'Default use',
          sectionFn: () => (
            <TeamDropdown />
          )
        }]
      }]
    });
};
