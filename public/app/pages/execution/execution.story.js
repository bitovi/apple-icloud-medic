import React from 'react';
import { storiesOf } from '@storybook/react';
import Execution from './execution';

export default (makeAppComponent) => {
  const MockApp = makeAppComponent({
    teamName: {
      value: 'icloud'
    }
  });

  storiesOf('App Components', module)
    .addDecorator(story => <MockApp>{story()}</MockApp>)
    .addWithChapters('Page - Execution', {
      chapters: [{
        sections: [{
          sectionFn: () => (
            <Execution />
          )
        }]
      }]
    });
};
