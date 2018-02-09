import React from 'react';
import { storiesOf } from '@storybook/react';
import NewRule from './new-rule';

storiesOf('Components', module)
  .addWithChapters('NewRule', {
    chapters: [{
      sections: [{
        title: 'Default use',
        sectionFn: () => (
          <NewRule projectId={104} />
        )
      }]
    }]
  });
