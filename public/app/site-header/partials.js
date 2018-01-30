import styled from 'styled-components';
import { Grid } from '@public/semantic-ui/index';

const lightBgColor = '#29313f';
const lightBorder = '1px solid rgba(255, 255, 255, .2)';

const Header = styled(Grid)`
  &&& {
    color: #fff;
    background-color: #171d26;
    line-height: 2.7;
    .column {
      padding-top: 0;
      padding-bottom: 0;
      font-family: "Helvetica Neue";
      font-weight: 300;
      display: flex;
      align-items: center;
    }
    .ui.dropdown {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-grow: 1;
      height: 100%;
    }
  }
`;

const LightColumn = styled(Grid.Column)`
  &&&& {
    color: #fff;
    background-color: ${lightBgColor};
    font-size: 1.5rem;
    padding: 0;
    flex-grow: 0;
    width: 34rem;
    border-right: ${lightBorder};
  }
`;

const UserColumn = styled(Grid.Column)`
  &&&& {
    font-size: 1.2rem;
    padding: 0;
    border-left: ${lightBorder};
    flex-grow: 0;
    width: 20rem;
    &:hover {
      background-color: ${lightBgColor};
    }
  }
`;

const LinksColumn = styled(Grid.Column)`
  &&&& {
    flex-grow: 1
  }
`;

const Logo = styled.a`
  font-size: 1.7rem;
  border-right: ${lightBorder};
  padding-right: 2rem;
  padding-left: 2rem;
  font-weight: 500;
  color: inherit;
  &:hover {
    color: inherit;
  }
`;

export { Header, LightColumn, Logo, UserColumn, LinksColumn };
