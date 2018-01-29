import React from 'react';
import { storiesOf } from '@storybook/react';
import NewProject from './new-project';

storiesOf('Components', module)
  .addWithChapters('NewProject', {
    chapters: [{
      sections: [{
        title: 'Default use',
        sectionFn: () => (
          <NewProject />
        )
      }]
    }]
  });