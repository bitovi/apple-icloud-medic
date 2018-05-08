import React from 'react';
import { storiesOf } from '@storybook/react';
import FieldWithFrom from './field-with-form';

storiesOf('Components', module)
  .addWithChapters('FieldWithFrom', {
    chapters: [{
      sections: [{
        title: 'The change event only fires when the form is complete',
        sectionFn: () => {

          return <div>
            <FieldWithFrom />
            <pre id="output"></pre>
          </div>;
        }
      }]
    }]
  });
