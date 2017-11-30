import styled from 'styled-components';
import { darken, desaturate } from 'polished';
import { Divider as SemanticDivider } from 'semantic-ui-react';
import 'semantic-ui-less/semantic.less';

// <Divider>
const Divider = styled(SemanticDivider)`
  &&& {

  }
`;

// A divider column is intended to be used around vertical dividers.
// This is a customization to get around a display bug:
//   - https://github.com/Semantic-Org/Semantic-UI/issues/4342
// This fix was inspired by this fix:
//   - http://jsfiddle.net/xox5kt31/2/
//
// <Divider.Column>
//   <Divider vertical>
// </Divider.Column>
Divider.Column = styled.div`
  position: relative;
  padding: 0 !important;
`;

// Needed for correct output in storybooks, dev tools, etc
Divider.Column.displayName = 'Divider.Column';

export { Divider };
