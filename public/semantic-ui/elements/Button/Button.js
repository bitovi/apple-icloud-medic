import styled from 'styled-components';
import { darken, desaturate } from 'polished';
import { Button as SemanticButton } from 'semantic-ui-react';
import 'semantic-ui-less/semantic.less';

// <Button>Click Me</Button>
const Button = styled(SemanticButton)`
  &&& {

  }
`;

export { Button };
