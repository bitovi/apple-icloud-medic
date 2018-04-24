import styled from 'styled-components';
import { Form } from '@public/semantic-ui/index';

const ComponentWrapper = styled(Form)`
  &&&& {
    > * {
      margin: .5em .15em;
      :last-child {
        margin-top: 2em;
      }
    }
  }
`;

export { ComponentWrapper };
