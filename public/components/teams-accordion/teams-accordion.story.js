import React from 'react';
import { storiesOf } from '@storybook/react';
import TeamsAccordion from './teams-accordion';

storiesOf('Components', module)
  .addWithChapters('Teams Accordion', {
    chapters: [{
      sections: [{
        title: 'Default use',
        sectionFn: () => (
          <TeamsAccordion />
        )
      },
      {
        title: 'No teams state',
        sectionFn: () => (
          <TeamsAccordion teams={[]}/>
        )
      }]
    }]
  });
