import React from 'react';
import { storiesOf } from '@storybook/react';
import { Accordion } from './Accordion';

const panels = [{
  title: 'Simple string title',
  content: 'Simple string content'
}, {
  title: {
    key: 'title-1',
    content: 'Panel 1 title'
  },
  content: {
    key: 'content-1',
    content: 'Panel 1 conent'
  }
}];

storiesOf('Semantic UI/Modules', module)
  .addWithChapters('Accordion', {
    chapters: [{
      info: `
        Please see the [semantic-ui website](https://react.semantic-ui.com/modules/accordion)
      `,
      sections: [{
        title: 'Basic styled accordion',
        sectionFn: () => (
          <Accordion styled panels={panels} />
        )
      }]
    }]
  });
