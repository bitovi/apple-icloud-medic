import styled from 'styled-components';
import { Dimmer as SemanticDimmer} from 'semantic-ui-react';
import 'semantic-ui-less/semantic.less';

const Dimmer = styled(SemanticDimmer)`
&&& {
  .ui.header:first-child:last-child {
    transform: translateY(40vh);
  }
}
`;

export { Dimmer };
