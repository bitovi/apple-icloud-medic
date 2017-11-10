import styled from 'styled-components';
import { darken, desaturate } from 'polished';
import vars from './_variables';
import SemanticMenu from 'semantic-ui-react/menu';
import 'semantic-ui-css/components/menu.css';
import 'semantic-ui-css/components/icon.css';

// <Menu>Click Me</Menu>
const Menu = styled(SemanticMenu)`
  &&& {

  }
`;

Menu.Item = styled(SemanticMenu.Item)`
  &&& {

  }
`;

export { Menu };
