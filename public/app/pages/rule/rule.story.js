import React from 'react';
import { storiesOf } from '@storybook/react';
import RulePage from './rule';

storiesOf('App Components/Pages', module)
  .addWithChapters('Rule', {
    chapters: [{
      sections: [{
        sectionFn: () => (
          <RulePage ruleId={104} />
        )
      }]
    }]
  });
