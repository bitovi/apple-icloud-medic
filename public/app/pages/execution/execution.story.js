import React from 'react';
import { storiesOf } from '@storybook/react';
import ExecutionContent from './execution-content/execution-content';

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
          sectionFn: () => <ExecutionContent query={{ id: 103 }} selectedTabIndex={0}/>
        },
        {
          sectionFn: () => <ExecutionContent query={{ id: 103 }} selectedTabIndex={1}/>
        },
        {
          sectionFn: () => <ExecutionContent query={{ id: 103 }} selectedTabIndex={2}/>
        }]
      }]
    });
};
