import React from 'react';
import { storiesOf } from '@storybook/react';
import { Modal } from './Modal';
import { Button, Header, Icon } from 'semantic-ui-react';
import EditForm from '@public/components/edit-form/edit-form';

storiesOf('Semantic UI/Modules', module)
  .addWithChapters('Modal', {
    chapters: [{
      sections: [{
        title: 'Basic modal',
        sectionFn: () =>  (
          <div>
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
          </div>
        )
      }]
    }]
  });
