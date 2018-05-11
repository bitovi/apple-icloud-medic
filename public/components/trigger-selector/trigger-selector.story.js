import React from 'react';
import { storiesOf } from '@storybook/react';
import { Form } from '@public/semantic-ui/index';
import TriggerSelector from './trigger-selector';

storiesOf('Components', module)
  .addWithChapters('TriggerSelector', {
    chapters: [{
      sections: [{
        title: 'The change event only fires when the form is complete',
        sectionFn: () => {
          const handleChange = (data) => {
            document.getElementById('output').innerHTML = JSON.stringify(data, null, '  ');
          };
          return <Form>
            <TriggerSelector query={{}} onChange={handleChange} />
            <pre id="output"></pre>
          </Form>;
        }
      }, {
        title: 'The value can be fed directly in.',
        sectionFn: () => {
          const value = {
            'type': 'core.st2.webhook',
            'parameters': {
              'url': '/some-path'
            }
          };
          return <Form><TriggerSelector query={{}} value={value} /></Form>;
        }
      }]
    }]
  });
