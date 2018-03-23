import styled from 'styled-components';
import { Accordion } from '@public/semantic-ui/index';

const ComponentWrapper = styled(Accordion)`
  &&&& {
    .title {
      background-color: #F7F7F7;
      padding-bottom: 1em;
      font-size: 1.25em;
    }
    .header {
      margin-bottom: 1em;
    }
    .segment {
      border: none;
      width: 33%;
    }
    .segments {
      border: none;
      box-shadow: none;
    }
    .label {
      float: right;
    }
  }
`;

export { ComponentWrapper };
