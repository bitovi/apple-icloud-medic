import styled from 'styled-components';
import { Grid } from '@public/semantic-ui/index';

const Header = styled(Grid)`
  line-height: 3.5rem;
  // TODO: use variables
  color: #fff;
  background-color: #121a25;

  .column {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  a {
    color: inherit;
    &:hover { color: inherit }
  }
`;

const LightColumn = styled(Grid.Column)`
  color: #fff;
  background-color: rgba(255, 255, 255, .1); // TODO: variable

  &:nth-child(2) {
    border-right: 1px solid rgba(255, 255, 255, .3);
  }

  .ui.dropdown {
    vertical-align: bottom;

    .menu {
      margin-top: 1rem;
    }
  }
`;

const Logo = styled.a`
  font-size: 2rem;
  display: block;
  border-right: 1px solid rgba(255, 255, 255, .3);
`;

export { Header, LightColumn, Logo };
