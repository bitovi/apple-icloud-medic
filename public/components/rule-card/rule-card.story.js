import React from 'react';
import { storiesOf } from '@storybook/react';
import RuleCard from './rule-card';

storiesOf('Components', module)
  .addWithChapters('RuleCard', {
    chapters: [{
      sections: [{
        title: 'Default use',
        sectionFn: () => (
          <RuleCard id={104} />
        )
      }]
    }]
  });
