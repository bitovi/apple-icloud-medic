import styled from 'styled-components';
import { darken, desaturate } from 'polished';
import vars from './_variables';
import SemanticList from 'semantic-ui-react/list';
import 'semantic-ui-css/components/list.css';

// <List />
const List = styled(SemanticList)`
  &&& {

  }
`;

List.Item = styled(SemanticList.Item)`

`;

export { List };
