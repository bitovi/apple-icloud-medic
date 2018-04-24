import React from 'react';
import { storiesOf } from '@storybook/react';
import Execution from './execution';

export default (makeAppComponent) => {
  const MockApp = makeAppComponent({
    teamName: {
      default: 'icloud'
    }
  });

  storiesOf('App Components/Pages', module)
    .addDecorator(story => <MockApp>{story()}</MockApp>)
    .addWithChapters('Execution', {
      chapters: [{
        sections: [{
          sectionFn: () => <Execution executionId="103" activeIndex={0}/>
        },
        {
          sectionFn: () => <Execution executionId="103" activeIndex={1}/>
        },
        {
          sectionFn: () => <Execution executionId="103" activeIndex={2}/>
        },
        {
          sectionFn: () => <Execution executionId="103" activeIndex={3}/>
        }]
      }]
    });
};
