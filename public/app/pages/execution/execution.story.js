import React from 'react';
import DefineMap from 'can-define/map/map';
import { storiesOf } from '@storybook/react';
import Execution from './execution';

const items = [
  { title: 'Item 1', route: '#item-1' },
  { title: 'Item 2', route: '#item-2' },
  { title: 'Item 3', route: '#item-3' }
];

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
