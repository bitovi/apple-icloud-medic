import React from 'react';
import { storiesOf } from '@storybook/react';
import PageHeader from './page-header';

const page = {
  title: 'Sample Page',
  description: 'We can add a little context here',
  category: 'category'
};

const pages = [
  { title: 'Rules', route: '/rules' },
  { title: 'Contributors', route: '/contributors' },
  { title: 'Dashboard', route: '/dashboard' }
];

storiesOf('Components', module)
  .addWithChapters('PageHeader', {
    chapters: [{
      sections: [{
        title: 'Default use',
        sectionFn: () => (
          <PageHeader
            title={page.title}
            description={page.description}
            category={page.category}
            pages={pages}
          />
        )
      }]
    }]
  });
