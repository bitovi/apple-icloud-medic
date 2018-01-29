import React from 'react';
import { storiesOf } from '@storybook/react';
import { Form } from './Form';
import { Button } from 'semantic-ui-react';


storiesOf('Semantic UI/Collections', module)
  .addWithChapters('Form', {
    chapters: [{
      info: 'A Form displays a set of related user input fields in a structured way',
      sections: [{
        title: 'Default behavior',
        info: 'Note: Colors added for visual que only',
        sectionFn: () => (
          <Form>
            <Form.Field>
              <label>First Name</label>
              <input placeholder='First Name' />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input placeholder='Last Name' />
            </Form.Field>
            <Form.Field>
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        )
      }]
    }]
  });
