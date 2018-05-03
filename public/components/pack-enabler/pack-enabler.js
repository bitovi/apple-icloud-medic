import React from 'react';
import Component from 'react-view-model/component';
import { Modal, Button } from '@public/semantic-ui/index';
import PackSelector from '@public/components/pack-selector/pack-selector';
import ViewModel from './pack-enabler.viewmodel';

/**
 * @module PackEnabler
 * @parent components
 *
 * PackEnabler allows for enabling packs
 */
class PackEnabler extends Component {
  static ViewModel = ViewModel;

  getTrigger () {
    const { handleOpen } = this.viewModel;
    return <Button basic fluid onClick={handleOpen}>Enable more packs</Button>;
  }

  render() {
    const { isOpen, excludePackIds, handlePackSelect, handleSave, handleClose } = this.viewModel;
    return (
      <Modal open={isOpen} onClose={handleClose} trigger={this.getTrigger()}>
        <Modal.Header>Select one or more Packs</Modal.Header>
        <Modal.Content scrolling>
          <PackSelector multiple query={{ id: { $notin: excludePackIds }}} onSelect={handlePackSelect} />
        </Modal.Content>
        <Modal.Actions>
          <Button basic size="tiny" onClick={handleClose}>Cancel</Button>
          <Button primary size="tiny" onClick={handleSave}>Save</Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default PackEnabler;
