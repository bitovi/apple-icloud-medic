import React from 'react';
import { storiesOf } from '@storybook/react';
import DefineList from 'can-define/list/list';
import PackSelector from './pack-selector';

const packs = [
  { id: 'pack_1', name: 'Pack 1', color: 'blue' },
  { id: 'pack_2', name: 'Pack 2', color: 'red' },
  { id: 'pack_3', name: 'Pack 3', color: 'green' },
];

const onSelect = (data) => {
  if (data instanceof DefineList || Array.isArray(data)) {
    alert(`You have selected ${data.length === 1 ? '1 pack' : data.length + ' packs'}`);
  } else {
    alert(`You have selected ${data.name}`);
  }
};

storiesOf('Components', module)
  .addWithChapters('Pack Selector', {
    chapters: [{
      sections: [{
        title: 'Select single',
        sectionFn: () => (
          <PackSelector packs={packs} onSelect={onSelect} />
        )
      }, {
        title: 'Select multiple',
        sectionFn: () => (
          <PackSelector multiple packs={packs} onSelect={onSelect} />
        )
      }, {
        title: 'Allow enabling',
        sectionFn: () => (
          <PackSelector allowEnabling query={{ id: { $in: ['pack_1', 'pack_8', 'pack_17'] } }} onSelect={onSelect} />
        )
      }, {
        title: 'itemsPerRow={5}',
        sectionFn: () => (
          <PackSelector itemsPerRow={5} onSelect={onSelect} />
        )
      }]
    }]
  });
