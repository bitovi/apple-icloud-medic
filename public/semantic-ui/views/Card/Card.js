import { Card as SemanticCard } from 'semantic-ui-react';
import 'semantic-ui-less/semantic.less';

const Card = SemanticCard;
Card.Meta = SemanticCard.Meta;
Card.Group = SemanticCard.Group;
Card.Header = SemanticCard.Header;
Card.Content = SemanticCard.Content;
Card.Description = SemanticCard.Description;

// Needed for correct output in storybooks, dev tools, etc
Card.Meta.displayName = 'Card.Meta';
Card.Group.displayName = 'Card.Group';
Card.Header.displayName = 'Card.Header';
Card.Content.displayName = 'Card.Content';
Card.Description.displayName = 'Card.Description';

export { Card };
export { StyledCard } from './StyledCard';
