import styled from 'styled-components';
import { Menu } from '@public/semantic-ui/index';

const HeaderMenuItem = styled(Menu.Item)`
  &&&& {
    a {
      color: #ffffff;
      &:hover {
        color: #2e8ecd;
      }
    }
  }
`;

export { HeaderMenuItem };
