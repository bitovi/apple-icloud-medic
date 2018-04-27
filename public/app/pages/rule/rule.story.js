import React from 'react';
import { storiesOf } from '@storybook/react';
import RuleContent from './rule-content/rule-content';

storiesOf('App Components/Pages', module)
  .addWithChapters('Rule', {
    chapters: [{
      sections: [{
        sectionFn: () => (
          <RuleContent id={101} />
        )
      }]
    }]
  });
