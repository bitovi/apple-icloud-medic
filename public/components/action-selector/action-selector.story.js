import React from 'react';
import { storiesOf } from '@storybook/react';
import ActionSelector from './action-selector';

storiesOf('Components', module)
  .addWithChapters('ActionSelector', {
    chapters: [{
      sections: [{
        title: 'The change event only fires when the form is complete',
        sectionFn: () => {
          const handleChange = (data) => {
            document.getElementById('output').innerHTML = JSON.stringify(data, null, '  ');
          };
          return <div>
            <ActionSelector query={{}} onChange={handleChange} />
            <pre id="output"></pre>
          </div>;
        }
      }/*, {
        title: 'The value can be fed directly in.',
        sectionFn: () => {
          const value = {
            'type': 'core.st2.webhook',
            'parameters': {
              'url': '/some-path'
            }
          };
          return <ActionSelector query={{}} value={value} />;
        }
      }*/]
    }]
  });
