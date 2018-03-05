import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@public/semantic-ui/index';
import RulesModel from '@public/models/rules';
import DataProvider from '@public/components/data-provider/data-provider';
import RuleCard from '@public/components/rule-card/rule-card';

/**
 * @module RuleCards
 * @parent components
 *
 * List of rules in a card template.
 */
const RuleCards = ({ rules, isEditing, itemsPerRow = 3 }) => {
  return (
    <Card.Group itemsPerRow={itemsPerRow}>
      {rules.map(rule => (
        <RuleCard rule={rule} key={rule.id} isEditing={isEditing}></RuleCard>
      ))}
    </Card.Group>
  );
};

/**
 * @memberof module:RuleCards
 */
RuleCards.propTypes = {
  /**
   * List of rules (expects a DefineList)
   */
  rules: PropTypes.object,
  /**
   * Whether or not the list is in edit mode
   */
  isEditing: PropTypes.bool,
  /**
   * Number of items per row
   */
  itemsPerRow: PropTypes.number
};

export default DataProvider(RuleCards, RulesModel, 'rules');
