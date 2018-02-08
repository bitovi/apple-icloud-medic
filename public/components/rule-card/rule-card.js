import React from 'react';
import Component from 'react-view-model/component';
import ViewModel from './rule-card.viewmodel.js';
import { Card, Label, Icon, StyledCard } from '@public/semantic-ui/index';

/**
 * @module RuleCard
 * @parent components
 *
 * RuleCard Description
 */
class RuleCard extends Component {
  /**
   * @method render
   * @returns template
   */
  render() {
    const { rule, isEditing } = this.viewModel;

    if (!rule) {
      return <p>Loading rule...</p>;
    }

    return (
      <StyledCard bgColor='#5069af'>
        <Card.Header>
          {rule.title}
          { isEditing ?
            <Icon name='close' onClick={(e) => this.viewModel.handleRemove(e, rule)}/>
            : null
          }
        </Card.Header>
        <Card.Content>
          <Card.Description>{rule.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Label empty circular color={rule.enabled ? 'green' : 'red'} /> Enabled
          <div className="floatRight">
            {rule.tags.length ?
              <Label color="black">{rule.tags[0].title}</Label>
              : null}
          </div>
        </Card.Content>
      </StyledCard>
    );
  }
}

RuleCard.ViewModel = ViewModel;

export default RuleCard;
