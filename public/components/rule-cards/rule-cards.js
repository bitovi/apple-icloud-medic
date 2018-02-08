import React from 'react';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/';
import { Card } from '@public/semantic-ui/index';
import RuleCard from '@public/components/rule-card/rule-card';
import Rules from '@public/models/rules';

/**
 * @Component RuleCards
 *
 * List of rules in a card template.
 */
class RuleCards extends Component {
  /**
   * @method render
   *
   * @returns RuleCard template
   */
  render() {
    const { isLoading, isEditing, rules, itemsPerRow } = this.viewModel;
    if (isLoading || !rules) {
      return <p>Loading...</p>;
    }
    if (!rules.length) {
      return <p>There are no rules to display.</p>;
    }
    return (
      <Card.Group itemsPerRow={itemsPerRow}>
        {rules.map(rule => (
          <RuleCard rule={rule} key={rule.id} isEditing={isEditing}></RuleCard>
        ))}
      </Card.Group>
    );
  }
}
/**
* @module RuleCards VM
* @parent RuleCards
*
* Rule Cards View Model
*/
RuleCards.ViewModel = DefineMap.extend('RuleCards', {
  /**
   * @prop projectId
   *
   * Project ID for the rules to load
   */
  projectId: {
    type: 'number'
  },
  /**
   * Get promise for rules list.
   *
   * @returns a promise that resolves to a list of rules.
   */
  rulesPromise: {
    type: 'any',
    get() {
      if (this.projectId) {
        return Rules.getList({ projectId: this.projectId });
      }
      return Promise.resolve([]);
    }
  },
  /**
   * Get list of rules
   * @type Rules.List
   * @returns a list of rules resolved from rulesPromise
   */
  rules: {
    get(lastSetVal, setVal){
      this.rulesPromise.then(rules => {
        setVal(rules);
      });
      return lastSetVal;
    },
    Type: Rules.List
  },
  /**
   * @prop isLoading
   *
   * Rules loading state.
   */
  isLoading: {
    type: 'boolean',
    value: () => false,
    get(lastSetVal, setVal){
      this.rulesPromise.then(() => {
        setVal(false);
      });
      return true;
    }
  },
  /**
   * @prop isEditing
   *
   * Rule edit state allows a rule to be deleted.
   */
  isEditing: {
    type: 'boolean',
    default: false
  },
  /**
   * @prop itemsPerRow
   *
   * Number of cards to be shown per row.
   * @default 3
   */
  itemsPerRow: {
    type: 'number',
    default: 3
  }
});

export default RuleCards;
