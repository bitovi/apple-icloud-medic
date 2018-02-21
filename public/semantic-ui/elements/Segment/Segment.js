import styled from 'styled-components';
// import { darken, desaturate } from 'polished';
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

const ContribSegment = styled(SemanticSegment)`
  &&& {
  }
`;

ContribSegment.Group = styled(SemanticSegment.Group)`
  &&& {
    .ui.horizontal.segments > .segment {
      border: none;
      background-color: #F7F7F7;
      color: #000000a3;

      i.delete {
        margin: .75em;
      }
    }
  }
`;

// Needed for correct output in storybooks, dev tools, etc
Segment.Group.displayName = 'Segment.Group';

export { Segment, ContribSegment };
