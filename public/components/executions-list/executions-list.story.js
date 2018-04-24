import React from 'react';
import { storiesOf } from '@storybook/react';
import ExecutionsList from './executions-list';

storiesOf('Components', module)
  .addWithChapters('ExecutionsList', {
    chapters: [{
      sections: [{
        title: 'Default use',
        sectionFn: () => <ExecutionsList />
      }]
    }]
  });
