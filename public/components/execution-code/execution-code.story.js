import React from 'react';
import { storiesOf } from '@storybook/react';
import ExecutionCode from './execution-code';

storiesOf('Components', module)
  .addWithChapters('ExecutionCode', {
    chapters: [{
      sections: [{
        title: 'Default use',
        sectionFn: () => (
          <ExecutionCode query={{id: 102}}/>
        )
      }]
    }]
  });
