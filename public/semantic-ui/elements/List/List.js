import styled from 'styled-components';
import { darken, desaturate } from 'polished';
import { List as SemanticList } from 'semantic-ui-react';
import 'semantic-ui-less/semantic.less';

// <List />
const List = styled(SemanticList)`
  &&& {

  }
`;

List.Item = styled(SemanticList.Item)`

`;

// Needed for correct output in storybooks, dev tools, etc
List.Item.displayName = 'List.Item';

export { List };
