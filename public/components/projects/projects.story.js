import React from 'react';
import { storiesOf } from '@storybook/react';
import Projects from './projects';

storiesOf('Components', module)
  .addWithChapters('Projects', {
    chapters: [{
      sections: [{
        title: 'isEditing false state',
        sectionFn: () => (
          <Projects />
        )
      },
      {
        title: 'isEditing true state',
        sectionFn: () => (
          <Projects isEditing='true'/>
        )
      },
      {
        title: 'success message',
        sectionFn: () => (
          <Projects message='Project sucessfully saved.'/>
        )
      }]
    }]
  });
