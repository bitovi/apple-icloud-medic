import React from 'react';
import Component from 'react-view-model/component';
import ViewModel from './edit-team-modal.viewmodel.js';
import { EditForm$Model } from '@public/components/edit-form/edit-form';
import { Modal, Button } from '@public/semantic-ui/index';
import { ComponentWrapper } from './partials/styled';
import TeamsModel from '@public/models/teams';


/**
 * @module EditTeamModal
 * @parent components
 *
 * Edit Team Modal is a modal with an edit form for editting existing teams or creating a new one.
 * Make sure that the team has a groupId that corresponds with the team's Directory Services group.
 * Defaults to edit state.
 */
class EditTeamModal extends Component {
  /**
   * @method render
   * @returns template
   */
  render() {
    const { isNew, floatedButton,  successMessage, status, formDef, open } = this.viewModel;
    const { handleSuccess, handleClick, handleCancel } = this.viewModel;

    let action = isNew ? 'Add New Team' : 'Edit Team';

    return (
      <ComponentWrapper
        open={open}
        dimmer='blurring'
        trigger={<Button floated={floatedButton} basic size='small'  onClick={handleClick}>
          {action}
        </Button>}>
        <Modal.Header>{action}</Modal.Header>
        <Modal.Description>
          <EditForm$Model
            ItemType={TeamsModel}
            formDef={formDef}
            successCallback={handleSuccess}
            successMessage={successMessage}
            cancelCallback={handleCancel}
            status={status}
          />
        </Modal.Description>
      </ComponentWrapper>
    );
  }
}


EditTeamModal.ViewModel = ViewModel;

export default EditTeamModal;
