import React from 'react';
import getValue from 'can-util/js/get/get';
import { Modal, Icon } from '@public/semantic-ui/index';
import JSONViewer from '@public/components/json-viewer/';
import { ModalLabel } from './styled';
import PropTypes from 'prop-types';

const ValueWithJSON = ({ execution, valueProp, jsonProp }) => {
  const val = getValue(execution, valueProp);
  if(!val) {
    return <span>&mdash;&mdash;</span>;
  }

  return (
    <Modal
      trigger={<ModalLabel>{val}<Icon name="zoom" /></ModalLabel>}
      closeIcon>
      <Modal.Header>
        Execution {execution.id}: {valueProp}&nbsp;<i>({val})</i>
      </Modal.Header>
      <Modal.Content scrolling>
        <JSONViewer src={getValue(execution, jsonProp)} collapsed={2} />
      </Modal.Content>
    </Modal>
  );
};

ValueWithJSON.propTypes = {
  execution: PropTypes.object,
  valueProp: PropTypes.string,
  jsonProp: PropTypes.string
};

export default ValueWithJSON;
