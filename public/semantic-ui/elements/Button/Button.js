import { Button as SemanticButton } from 'semantic-ui-react';
import 'semantic-ui-less/semantic.less';

const Button = SemanticButton;

Button.Group = SemanticButton.Group;

// Needed for correct output in storybooks, dev tools, etc
Button.Group.displayName = 'Button.Group';


export { Button };
