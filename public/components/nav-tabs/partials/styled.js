import styled from 'styled-components';
import variables from '@public/semantic-ui/variables';
import { Menu } from '@public/semantic-ui/index';

const ComponentWrapper = styled(Menu).attrs({
  secondary: true
})`
  &&&& {
    .item {
      border-bottom: 4px solid transparent;
      border-radius: 0;

      a {
        color: inherit;
      }

      &.active {
        color: ${variables.site.blue};
        background-color: transparent;
        border-bottom-color: ${variables.site.blue};
      }
    }
  }
`;

export { ComponentWrapper };
