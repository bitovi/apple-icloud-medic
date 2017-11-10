import styled from 'styled-components';
import { darken, desaturate } from 'polished';
import vars from './_variables';
import SemanticDropdown from 'semantic-ui-react/dropdown';
import 'semantic-ui-css/components/dropdown.css';
import 'semantic-ui-css/components/flag.css';
import 'semantic-ui-css/components/icon.css';
import 'semantic-ui-css/components/image.css';
import 'semantic-ui-css/components/label.css';
import 'semantic-ui-css/components/transition.css';

// <Dropdown>Click Me</Dropdown>
const Dropdown = styled(SemanticDropdown)`
  &&& {

  }
`;

export { Dropdown };
