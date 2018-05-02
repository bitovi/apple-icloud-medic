import styled from 'styled-components';
import { Form } from '@public/semantic-ui/index';

const CriterionGroup = styled(Form.Group)`
&&& {
  padding: .3em;
  margin-left: -.8em;
  margin-right: -.8em;

  &.incomplete {
    background: #fdd;
  }
}
`;


export { CriterionGroup };
