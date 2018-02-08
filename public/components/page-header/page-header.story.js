import React from 'react';
import { storiesOf } from '@storybook/react';
import PageHeader from './page-header';

storiesOf('Components', module)
  .addWithChapters('PageHeader', {
    chapters: [{
      sections: [{
        title: 'Default use',
        sectionFn: () => (
          <PageHeader
            title='Sample Page'
            description='We can add a little context here'
            category='custom_category'
            toggleEditFn={() => {}}
          />
        )
      }]
    }]
  });
