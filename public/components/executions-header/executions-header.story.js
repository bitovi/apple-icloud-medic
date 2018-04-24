import React from 'react';
import { storiesOf } from '@storybook/react';
import ExecutionsHeader from './executions-header';

storiesOf('Components', module)
  .addWithChapters('ExecutionsHeader', {
    chapters: [{
      sections: [{
        title: 'Default use',
        sectionFn: () => ( <ExecutionsHeader /> )
      }]
    }]
  });
