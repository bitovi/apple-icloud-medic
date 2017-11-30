import React from 'react';
import Component from 'react-view-model/component';
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
