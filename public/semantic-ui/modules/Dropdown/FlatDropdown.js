import { Dropdown } from 'semantic-ui-react';
import styled from 'styled-components';

const vPadding = '1rem';
const hPadding = '1.5rem';
const FlatDropdown = styled(Dropdown)`
  &&&.dropdown {
    padding-right: ${hPadding};
    padding-left: ${hPadding};
    font-weight: 200;
    .menu {
      border-radius: 0;
      font-size: inherit;
      min-width: 100%;
      border: 0;
      > .item {
        border: none;
        padding: ${vPadding} ${hPadding} !important; // semantic-ui uses !important >:(
        font-weight: inherit;
        color: #343a42;
        border-top: 1px solid #e8e8ea;
        &:hover{
          background-color: #e8e8ea;
        }
      }
    }
  }
`;

export { FlatDropdown };
