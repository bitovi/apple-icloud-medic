import React from 'react';
import { storiesOf } from '@storybook/react';
import ExecutionData from './execution-data';

storiesOf('Components', module)
  .addWithChapters('ExecutionData', {
    chapters: [{
      sections: [{
        title: 'Default use',
        sectionFn: () => (
          <ExecutionData query={{id: 104}}/>
        )
      }]
    }]
  });
