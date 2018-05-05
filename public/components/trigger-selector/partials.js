import styled from 'styled-components';
import { Form } from '@public/semantic-ui/index';

const FieldWrapper = styled(Form.Field)`
&&& {
  padding: .3em;
  margin-left: -.3em;
  margin-right: -.3em;
  background-color: ${props => props['data-valid'] === true ? 'transparent' : '#fdd'};
}
`;

const FormWrapper = styled.div`
  padding: 2em 1em 1em;
`;

export { FieldWrapper, FormWrapper };
