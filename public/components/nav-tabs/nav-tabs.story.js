import React from 'react';
import { storiesOf } from '@storybook/react';
import NavTabs from './nav-tabs';

storiesOf('Components', module)
  .addWithChapters('NavTabs', {
    chapters: [{
      sections: [{
        title: 'Default use',
        sectionFn: () => (
          <NavTabs
            selectedTabId='tab1'
            baseUrl="#prevent-default"
            tabs={[{ title: 'Tab 1', tabId: 'tab1'}, { title: 'Tab 2', tabId: 'tab2'}]} />
        )
      }]
    }]
  });
