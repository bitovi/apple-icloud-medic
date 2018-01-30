import React from 'react';
import { storiesOf } from '@storybook/react';
import { Dropdown, FlatDropdown, FlatDropdownRainbow } from './Dropdown';

storiesOf('Semantic UI/Modules', module)
  .addWithChapters('Dropdown', {
    chapters: [{
      info: `
        **IMPORTANT:** Make sure to set a defaultValue for all dropdowns!
      `,
      sections: [{
        title: 'Basic dropdown',
        sectionFn: () => (
          <div>
            <Dropdown defaultValue="item1" options={[{ text: 'Item 1', value: 'item1' }, { text: 'Item 2', value: 'item2' }]} />
          </div>
        )
      }, {
        title: 'Flat dropdown',
        sectionFn: () => (
          <div>
            <FlatDropdown defaultValue="item1" options={[{ text: 'Item 1', value: 'item1' }, { text: 'Item 2', value: 'item2' }]} />
          </div>
        )
      }, {
        title: 'Flat Rainbow dropdown',
        sectionFn: () => (
          <div>
            <FlatDropdownRainbow defaultValue="item1" options={[{ text: 'Item 1', value: 'item1' }, { text: 'Item 2', value: 'item2' }, { text: 'Item 3', value: 'item3' }, { text: 'Item 4', value: 'item4' }, { text: 'Item 5', value: 'item5' }, { text: 'Item 6', value: 'item6' }]} />
          </div>
        )
      }]
    }]
  });
