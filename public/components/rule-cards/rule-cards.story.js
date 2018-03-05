import React from 'react';
import { storiesOf } from '@storybook/react';
import RuleCards from './rule-cards';

storiesOf('Components', module)
  .addWithChapters('Rule Cards', {
    chapters: [{
      sections: [{
        sectionFn: () => (
          <RuleCards query={{ projectId: 104 }} />
        )
      }]
    }]
  });
