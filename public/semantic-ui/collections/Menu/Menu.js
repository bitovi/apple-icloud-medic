import styled from 'styled-components';
// import { darken, desaturate } from 'polished';
import { Menu as SemanticMenu } from 'semantic-ui-react';
import 'semantic-ui-less/semantic.less';

// <Menu>Click Me</Menu>
const Menu = styled(SemanticMenu)`
  &&& {

  }
`;

Menu.Item = styled(SemanticMenu.Item)`
  &&& {

  }
`;

// Needed for correct output in storybooks, dev tools, etc
Menu.Item.displayName = 'Menu.Item';

export { Menu };
