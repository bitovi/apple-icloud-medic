import styled from 'styled-components';
import { darken, desaturate } from 'polished';
import vars from './_variables';
import SemanticModal from 'semantic-ui-react/modal';
import 'semantic-ui-css/components/modal.css';
import 'semantic-ui-css/components/dimmer.css';
import 'semantic-ui-css/components/transition.css';
import 'semantic-ui-css/components/icon.css';
import 'semantic-ui-css/components/button.css';

// <Modal>Click Me</Modal>
const Modal = styled(SemanticModal)`
  &&& {

  }
`;

Modal.Header = styled(SemanticModal.Header)`
  &&& {

  }
`;

Modal.Content = styled(SemanticModal.Content)`
  &&& {

  }
`;



export { Modal };
