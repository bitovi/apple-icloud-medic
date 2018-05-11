import React from 'react';
import { storiesOf } from '@storybook/react';
import { Form } from '@public/semantic-ui/index';
import FieldWithFrom from './field-with-form';

const schema1 = {
  title: { type: 'string', required: true },
  enabled: { type: 'boolean' },
  dayOfWeek: { enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] }
};
const schema2 = {
  name: { type: 'string', required: true },
  age: { type: 'integer' },
  gender: { enum: ['Neutral', 'Male', 'Female'] }
};
const rawData = [
  { name: 'Item 1', description: 'Item 1 optional description', lookup_field: 'item1.foo.bar.baz', schema_field: { nested: schema1 } },
  { name: 'Item 2', lookup_field: 'item2.bing.bong', schema_field: { nested: schema1 } },
  { name: 'Item 3', lookup_field: 'item2.foo.bing', schema_field: { nested: schema2 } },
];

storiesOf('Components', module)
  .addWithChapters('FieldWithFrom', {
    chapters: [{
      sections: [{
        title: 'This must appear inside a Form component to render correctly.',
        sectionFn: () => {
          const handleChange = (data) => {
            document.getElementById('output').innerHTML = JSON.stringify(data, null, '  ');
          };
          return <Form>
            <FieldWithFrom
              dataSearchField='lookup_field'
              dataSchemaField='schema_field.nested'
              rawData={rawData}
              label="Select an Item"
              value={null}
              onChange={handleChange}
            />
            <pre id="output"></pre>
          </Form>;
        }
      }, {
        title: 'This must appear inside a Form component to render correctly.',
        sectionFn: () => {
          const value = {
            searchValue: 'item2.foo.bing',
            formData: {
              name: 'Ryan Wheale',
              age: 35,
              gender: 'Male'
            }
          };
          return <Form>
            <FieldWithFrom
              dataSearchField='lookup_field'
              dataSchemaField='schema_field.nested'
              rawData={rawData}
              label="Select an Item"
              value={value}
              onChange={() => {}}
            />
            <pre id="output"></pre>
          </Form>;
        }
      }]
    }]
  });
