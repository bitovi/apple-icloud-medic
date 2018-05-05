import React from 'react';
import { storiesOf } from '@storybook/react';
import { Form } from '@public/semantic-ui/index';
import CriteriaField from './criteria-field';

storiesOf('Components', module)
  .addWithChapters('CriteriaField', {
    chapters: [{
      info: 'This component must be rendered inside a Semantic UI **&lt;Form /&gt;** to render properly',
      sections: [{
        title: 'Each criterion must be complete before it shows up in the value',
        sectionFn: () => {
          const handleChange = (val) => {
            document.getElementById('selectedValue').innerHTML = JSON.stringify(val, null, '  ');
          };
          return <Form>
            <CriteriaField onChange={handleChange} />
            <h4>Add criteria to see the result:</h4>
            <pre id="selectedValue"></pre>
          </Form>;
        }
      }, {
        title: 'Can accept a "value" to act as a controlled field',
        sectionFn: () => {
          let value = {
            'tigger.body.name': {
              type: 'regex',
              pattern: 'foobar'
            }
          };
          return <Form> <CriteriaField value={value} /> </Form>;
        }
      }]
    }]
  });
