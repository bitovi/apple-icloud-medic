import React from 'react';
import { storiesOf } from '@storybook/react';
import SiteHeader from './site-header';
import UserModel from '@public/models/user';

export default (makeAppComponent) => {
  const MockApp = makeAppComponent({
    teamName: {
      default: 'icloud'
    }
  });
  const currentUser = new UserModel({
    isSuperAdmin: false,
    displayName: 'Nikunj Virani',
    firstName: 'Nikunj',
    lastName: 'Virani',
    nickName: 'Nikunj',
    emailAddress: 'nvirani@apple.com',
    allGroups: []
  });

  storiesOf('App Components', module)
    .addDecorator(story => <MockApp>{story()}</MockApp>)
    .addWithChapters('Site Header', {
      chapters: [{
        sections: [{
          sectionFn: () => (
            <SiteHeader currentUser={currentUser} />
          )
        }]
      }]
    });
};
