import styled from 'styled-components';
// import { darken, desaturate } from 'polished';
import { Modal as SemanticModal } from 'semantic-ui-react';
import 'semantic-ui-less/semantic.less';

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

// Needed for correct output in storybooks, dev tools, etc
Modal.Header.displayName = 'Modal.Header';
Modal.Content.displayName = 'Modal.Content';

export { Modal };
