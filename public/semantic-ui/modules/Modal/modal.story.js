import React from 'react';
import { storiesOf } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from 'semantic-ui-react';

storiesOf('Semantic UI/Modules', module)
  .addWithChapters('Modal', {
    chapters: [{
      sections: [{
        title: 'Basic modal',
        sectionFn: () =>  (
          <Modal trigger={<Button>Show Modal</Button>}>
            <Modal.Header>Select a Photo</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <p>This is an example modal</p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button basic size="tiny"> Cancel </Button>
              <Button primary size="tiny">  Save </Button>
            </Modal.Actions>
          </Modal>
        )
      }]
    }]
  });
