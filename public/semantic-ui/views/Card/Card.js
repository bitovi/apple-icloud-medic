import styled from 'styled-components';
import { Card as SemanticCard } from 'semantic-ui-react';
import 'semantic-ui-less/semantic.less';

const Card = SemanticCard;
Card.Group = SemanticCard.Group;

const StyledCard = styled(SemanticCard)`
&&& {
    background-color:${props => props.bgColor};
    color: white;
    padding: .5rem;
}
`;

StyledCard.Header = styled(SemanticCard.Header)`
&&& {
    padding: 1rem;
    font-size: 1.25rem;
}
`;

// Needed for correct output in storybooks, dev tools, etc
Card.Group.displayName = 'Card.Group';

export { Card, StyledCard };
