import styled from 'styled-components';
import { Button as SemanticButton } from 'semantic-ui-react';
import variables from '@public/semantic-ui/variables';
import 'semantic-ui-less/semantic.less';

const Button = styled(SemanticButton).attrs({
  customBackgroundColor: props => props.disabled ? variables['color-border'] : null,
  customBorderRadius: props => props.basic ? variables['defaultBorderRadius'] : null
})`
  &&& {
  	${props => props.customBackgroundColor ? `background-color: ${props.customBackgroundColor};` : ''}
  	${props => props.customBorderRadius ? `border-radius: ${props.customBorderRadius};` : ''}
  }
`;

Button.Group = SemanticButton.Group;

// Needed for correct output in storybooks, dev tools, etc
Button.Group.displayName = 'Button.Group';


export { Button };
