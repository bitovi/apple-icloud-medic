import React from 'react';
import { storiesOf } from '@storybook/react';
import Execution from './execution';

storiesOf('App Components', module)
  .addWithChapters('Page - Executions', {
    chapters: [{
      sections: [{
        sectionFn: () => (
          <Execution />
        )
      }]
    }]
  });
