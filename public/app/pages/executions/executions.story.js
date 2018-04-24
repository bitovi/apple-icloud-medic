import React from 'react';
import { storiesOf } from '@storybook/react';
import Executions from './executions';

storiesOf('App Components/Pages', module)
  .addWithChapters('Executions', {
    chapters: [{
      sections: [{
        sectionFn: () => <Executions />
      }]
    }]
  });
