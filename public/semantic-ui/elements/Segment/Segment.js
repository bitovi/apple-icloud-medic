import styled from 'styled-components';
import { darken, desaturate } from 'polished';
import { Segment as SemanticSegment } from 'semantic-ui-react';
import 'semantic-ui-less/semantic.less';

// <Segment>
const Segment = styled(SemanticSegment)`
  &&& {

  }
`;

Segment.Group = styled(SemanticSegment.Group)`
  &&& {

  }
`;

// Needed for correct output in storybooks, dev tools, etc
Segment.Group.displayName = 'Segment.Group';

export { Segment };
