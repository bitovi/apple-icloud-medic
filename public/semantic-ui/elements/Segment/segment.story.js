import React from 'react';
import { storiesOf } from '@storybook/react';
import { Segment } from '../../index';

storiesOf('Semantic UI/Layout', module)
  .addWithChapters('Segment', {
    info: `
      A segment is used to create a grouping of related content.

      [Read more here](https://react.semantic-ui.com/elements/segment)
    `,
    chapters: [{
      sections: [{
        sectionFn: () => (
          <div>
            <Segment>
              A segment of content
            </Segment>
          </div>
        )
      }]
    }]
  });
