import styled from 'styled-components';
import { Segment } from 'semantic-ui-react';

const TeamMemberRow = styled(Segment.Group)`
  > .ui.segment {
    width: 33%;
    .label {
      float: right;
    }
  }
`;

export { TeamMemberRow };
