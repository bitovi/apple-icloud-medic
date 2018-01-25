import React from 'react';
import DefineMap from 'can-define/map/map';
import { storiesOf } from '@storybook/react';
import SiteHeader from './site-header';

export default (makeAppComponent) => {
  const MockApp = makeAppComponent({
    teamName: {
      value: 'icloud'
    }
  });

  storiesOf('App Components', module)
    .addDecorator(story => <MockApp>{story()}</MockApp>)
    .addWithChapters('Site Header', {
      chapters: [{
        sections: [{
          sectionFn: () => (
            <SiteHeader />
          )
        }]
      }]
    });
};
