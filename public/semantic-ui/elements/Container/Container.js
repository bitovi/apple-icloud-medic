import styled from 'styled-components';
// import { darken, desaturate } from 'polished';
import { Container as SemanticContainer } from 'semantic-ui-react';
import 'semantic-ui-less/semantic.less';

// <Container />
const Container = styled(SemanticContainer).attrs({
  padding: (props) => props.fluid ? '1.5rem' : '0'
})`
  &&& {
    padding: ${props => props.padding}
  }
`;

export { Container };
