import React from 'react';
import { storiesOf } from '@storybook/react';
import PageTabs from './page-tabs';

export default (makeAppComponent) => {
  const MockApp = makeAppComponent({
    teamName: {
      value: 'icloud'
    }
  });

  const renderTab = (tabKey) => {
    return <div>This is the content for the {tabKey} tab</div>;
  };

  const tabs = [
    { menuItem: 'Tab 1', key: 'tab-1' },
    { menuItem: 'Tab 2', key: 'tab-2' },
    { menuItem: { name: 'Tab 3', href: '#custom-tab-href' }, key: 'tab-3' },
  ];

  storiesOf('App Components', module)
    .addDecorator(story => <MockApp>{story()}</MockApp>)
    .addWithChapters('Page Tabs', {
      chapters: [{
        sections: [{
          title: 'Default usage',
          sectionFn: () => (
            <PageTabs tabs={tabs} renderTab={renderTab} baseUrl='#tabs' />
          )
        },
        {
          title: 'With default active Index',
          sectionFn: () => (
            <PageTabs tabs={tabs} renderTab={renderTab} baseUrl='#tabs' activeIndex={2} />
          )
        }]
      }]
    });
};

