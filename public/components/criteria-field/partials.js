import styled from 'styled-components';
import { Form } from '@public/semantic-ui/index';

const CriterionGroup = styled(Form.Group)`
  padding: .3em;
  &.incomplete {
    background: #fdd;
  }
`;


export { CriterionGroup };
