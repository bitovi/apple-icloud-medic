import styled from 'styled-components';
// import { darken, desaturate } from 'polished';
import { Form as SemanticForm } from 'semantic-ui-react';
import 'semantic-ui-less/semantic.less';

// <Form />
const Form = styled(SemanticForm)`
  &&& {
    background-color: blue
  }
`;

Form.Field = SemanticForm.Field;
Form.Button = SemanticForm.Button;
Form.Checkbox = SemanticForm.Checkbox;
Form.Dropdown = SemanticForm.Dropdown;
Form.Group = SemanticForm.Group;
Form.Input = SemanticForm.Input;
Form.Radio = SemanticForm.Radio;
Form.Select = SemanticForm.Select;
Form.TextArea = SemanticForm.TextArea;


// Needed for correct output in storybooks, dev tools, etc
Form.Field.displayName = 'Form.Field';
Form.Button.displayName = 'Form.Button';
Form.Checkbox.displayName = 'Form.Checkbox';
Form.Dropdown.displayName = 'Form.Dropdown';
Form.Group.displayName = 'Form.Group';
Form.Input.displayName = 'Form.Input';
Form.Radio.displayName = 'Form.Radio';
Form.Select.displayName = 'Form.Select';
Form.TextArea.displayName = 'Form.TextArea';

export { Form };
