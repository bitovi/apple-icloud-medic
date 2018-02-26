import React from 'react';
import { storiesOf } from '@storybook/react';
import SiteNav from './site-nav';
import styled from 'styled-components';

const DarkBackground = styled.div`
  &&&& {
    background-color: #141a23;
  }
`;

export default (makeAppComponent) => {
  const MockApp = makeAppComponent({
    teamName: {
      default: 'icloud'
    }
  });

  storiesOf('App Components', module)
    .addDecorator(story => <MockApp>{story()}</MockApp>)
    .addWithChapters('Site Nav', {
      chapters: [{
        sections: [{
          title: 'Default Header',
          sectionFn: () => (
            <DarkBackground>
              <SiteNav />
            </DarkBackground>
          )
        }]
      }]
    });
};

