import React from 'react';
import { storiesOf } from '@storybook/react';
import { Form } from '@public/semantic-ui/index';
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
          return <Form>
            <ActionSelector query={{}} onChange={handleChange} />
            <pre id="output"></pre>
          </Form>;
        }
      }, {
        title: 'The value can be fed directly in.',
        sectionFn: () => {
          const value = {
            ref: 'core.local',
            parameters: {
              cmd: 'echo "Hello"',
              env: {
                NODE_ENV: 'production'
              }
            }
          };
          return <Form><ActionSelector query={{}} value={value} /></Form>;
        }
      }]
    }]
  });
