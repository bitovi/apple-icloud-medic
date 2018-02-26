import React from 'react';
import { storiesOf } from '@storybook/react';
import { Tab } from './Tab';

const panes = [
  { menuItem: 'Tab 1', render: () => <div>Tab 1 content</div> },
  { menuItem: 'Tab 2', render: () => <div>Tab 2 content</div> },
  { menuItem: 'Tab 3', render: () => <div>Tab 3 content</div> },
];

storiesOf('Semantic UI/Modules', module)
  .addWithChapters('Tab', {
    chapters: [{
      sections: [{
        title: 'Basic tabs',
        sectionFn: () => (
          <div>
            <Tab panes={panes} />
          </div>
        )
      }, {
        title: 'Secondary',
        sectionFn: () => (
          <div>
            <Tab menu={{secondary: true}} panes={panes} />
          </div>
        )
      }, {
        title: 'Pointing',
        sectionFn: () => (
          <div>
            <Tab menu={{pointing: true}} panes={panes} />
          </div>
        )
      }, {
        title: 'Secondary pointing',
        sectionFn: () => (
          <div>
            <Tab menu={{secondary: true, pointing: true}} panes={panes} />
          </div>
        )
      }, {
        title: 'With active index',
        sectionFn: () => (
          <div>
            <Tab panes={panes} activeIndex={2} />
          </div>
        )
      }]
    }]
  });
