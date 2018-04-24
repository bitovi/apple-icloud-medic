import React from 'react';
import { storiesOf } from '@storybook/react';
import ExecutionDetail from './execution-detail';

storiesOf('Components', module)
  .addWithChapters('ExecutionDetail', {
    chapters: [{
      sections: [{
        title: 'Default use',
        sectionFn: () => (
          <ExecutionDetail query={{id: 103}}/>
        )
      }]
    }]
  });
