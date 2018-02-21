import React from 'react';
import { storiesOf } from '@storybook/react';
import { Search } from './Search';

storiesOf('Semantic UI/Modules', module)
  .addWithChapters('Search', {
    chapters: [{
      sections: [{
        title: 'Basic search',
        sectionFn: () => (
          <div>
            <Search />
          </div>
        )
      }]
    }]
  });
