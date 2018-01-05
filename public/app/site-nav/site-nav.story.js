import React from 'react';
import { storiesOf } from '@storybook/react';
import SiteNav from './site-nav';

const items = [
  { title: 'Item 1', route: '#item-1' },
  { title: 'Item 2', route: '#item-2' },
  { title: 'Item 3', route: '#item-3' }
];

export default () => {
  storiesOf('App Components', module)
    .addWithChapters('Site Nav', {
      chapters: [{
        sections: [{
          sectionFn: () => (
            <SiteNav items={items} />
          )
        }]
      }]
    });
};
