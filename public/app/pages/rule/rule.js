import React from 'react';
import Component from 'react-view-model/component';
import ViewModel from './rule.viewmodel';
import RuleContent from './rule-content/rule-content';

/**
 * @module RulePage
 * @parent components
 *
 * RulePage Description
 */
class RulePage extends Component {
  static ViewModel = ViewModel;

  /**
   * @method render
   */
  render() {
    const { ruleId } = this.viewModel;

    if (ruleId) {
      return <RuleContent id={ruleId} />;
    }

    return <div />;
  }
}

export default RulePage;
