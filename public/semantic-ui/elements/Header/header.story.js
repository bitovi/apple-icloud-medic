import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header, H1 } from './Header';

storiesOf('Semantic UI/Elements', module)
  .addWithChapters('Header', {
    chapters: [{
      sections: [{
        title: 'Default behavior',
        sectionFn: () => (
          <div>
            <Header as="h1">This is a header</Header>
            <H1>This is an H1 header</H1>
          </div>
        )
      }]
    }]
  });
