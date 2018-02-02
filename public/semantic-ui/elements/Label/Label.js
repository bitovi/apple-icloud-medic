import { Label as SemanticLabel } from 'semantic-ui-react';
import 'semantic-ui-less/semantic.less';

// <Label />
const Label = SemanticLabel;
Label.Group = SemanticLabel.Group;

// Needed for correct output in storybooks, dev tools, etc
Label.Group.displayName = 'Label.Group';

export { Label };
