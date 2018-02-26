import styled from 'styled-components';
import variables from '@public/semantic-ui/variables';
import { Tab } from '@public/semantic-ui/index';

const contPadding = variables.container.fluidPadding;
const StyledTab = styled(Tab)`
  &&& {
    .menu {
      margin: -${contPadding} -${contPadding} ${contPadding};
      padding-left: ${contPadding};
      padding-right: ${contPadding};
      background-color: #F7F7F7;
    }
  }
`;

export { StyledTab };
