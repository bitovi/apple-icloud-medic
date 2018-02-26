import React from 'react';
import { storiesOf } from '@storybook/react';
import Execution from './execution';

export default (makeAppComponent) => {
  const MockApp = makeAppComponent({
    teamName: {
      value: 'icloud'
    }
  });

  storiesOf('App Components/Pages', module)
    .addDecorator(story => <MockApp>{story()}</MockApp>)
    .addWithChapters('Execution', {
      chapters: [{
        sections: [{
          sectionFn: () => (
            <Execution />
          )
        }]
      }]
    });
};
