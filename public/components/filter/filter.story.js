import React from 'react';
import { storiesOf } from '@storybook/react';
import Filter from './filter';

const filterData = {
  key: 'executionType',
  title: 'Execution Types',
  options: ['rules', 'workflows', 'unhandled events']
};

storiesOf('Components', module)
  .addWithChapters('Filter', {
    chapters: [{
      sections: [{
        title: 'Default use',
        sectionFn: () => (
          <Filter filterData={filterData} formType='checkbox'/>
        )
      }]
    }]
  });
