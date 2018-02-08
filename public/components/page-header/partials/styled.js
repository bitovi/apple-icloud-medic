import styled from 'styled-components';
import variables from '@public/semantic-ui/variables';

const contPadding = variables.container.fluidPadding;
const ComponentWrapper = styled.header`
  &&& {
    background-color: #F7F7F7;
    margin: -${contPadding} -${contPadding} ${contPadding};
    padding: ${contPadding};
    border-bottom: 1px solid #ddd;

    > .divider {
      margin-left: -${contPadding};
      margin-right: -${contPadding};
    }

    .menu {
      margin-bottom: -${contPadding};
    }
  }
`;

export { ComponentWrapper };
