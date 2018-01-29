import styled from 'styled-components';
import { Message as SemanticMessage } from 'semantic-ui-react';
import 'semantic-ui-less/semantic.less';

// <Message>Click Me</Message>
const Message = styled(SemanticMessage)`
  &&& {

  }
`;

Message.Header = styled(SemanticMessage.Header)`
  &&& {

  }
`;

// Needed for correct output in storybooks, dev tools, etc
Message.Header.displayName = 'Message.Header';

export { Message };
