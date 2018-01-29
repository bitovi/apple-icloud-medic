import styled from 'styled-components';
import { Label as SemanticLabel } from 'semantic-ui-react';
import 'semantic-ui-less/semantic.less';

// <Label />
const Label = styled(SemanticLabel)`
  &&& {
    margin-right: .5rem;
    color: ${props => props.fontColor || 'inherit'};
    background-color: #fff;
    border-radius: 2px;
  }
`;

export { Label };
