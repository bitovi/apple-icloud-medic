import styled from 'styled-components';
import { Header as SemanticHeader } from 'semantic-ui-react';
import 'semantic-ui-less/semantic.less';

// <Header>Click Me</Header>
const Header = SemanticHeader;

const H1 = styled(SemanticHeader).attrs({
  as: 'h1'
})``;

export { Header, H1 };
