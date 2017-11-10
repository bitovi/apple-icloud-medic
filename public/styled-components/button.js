import styled from 'styled-components';
import { darken, desaturate } from 'polished';
import vars from './_variables';
import SemanticButton from 'semantic-ui-react/button';
import 'semantic-ui-css/components/button.css';

function getFontSize (size) {
  switch (size) {
    case 'large':
      return '1.4em';

    case 'small':
      return '.85em';

    default:
      return '1.1em';
  }
}

// <Button>Click Me</Button>
const Button = styled(SemanticButton)`
  &&& {
    font-size: ${props => getFontSize(props.size)};
  }
`;
// <ButtonPrimary>Click Me</ButtonPrimary>
const ButtonPrimary = Button.extend`
  &&& {
    font-size: ${props => getFontSize(props.size)};
    background-color: #ff472e;
    border-color: #ff472e;
    color: #222;
  }
`;
// <ButtonSecondary>Click Me</ButtonSecondary>
const ButtonSecondary = Button.extend`
  &&& {
    font-size: ${props => getFontSize(props.size)};
    background-color: #479f63;
    border-color: #479f63;
    color: #eee;
  }
`;

export { Button, ButtonPrimary, ButtonSecondary };
