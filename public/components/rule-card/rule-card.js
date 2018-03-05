import React from 'react';
import Component from 'react-view-model/component';
import route from 'can-route-pushstate';
import ViewModel from './rule-card.viewmodel.js';
import RulesModel from '@public/models/rules';
import DataProvider from '@public/components/data-provider/data-provider';
import { Card, Label, Icon, StyledCard } from '@public/semantic-ui/index';

/**
 * @module RuleCard
 * @parent components
 *
 * RuleCard Description
 */
class RuleCard extends Component {
  static ViewModel = ViewModel;

  render() {
    const { rule, isEditing } = this.viewModel;
    const url = route.url({ teamName: route.data.teamName, ruleId: rule.id });

    return (
      <StyledCard bgColor='#5069af' detailUrl={isEditing ? null : url}>
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
            {rule.tags && rule.tags.length ?
              <Label color="black">{rule.tags[0].title}</Label>
              : null}
          </div>
        </Card.Content>
      </StyledCard>
    );
  }
}

export default DataProvider(RuleCard, RulesModel, 'rule');
