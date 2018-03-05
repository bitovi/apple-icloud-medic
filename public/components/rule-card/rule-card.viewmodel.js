import makeDebug from 'debug';
import DefineMap from 'can-define/map/map';
import RulesModel from '@public/models/rules';

const debug = makeDebug('medic:components:rule-card');

/**
 * @module RuleCard VM
 * @parent RuleCard
 *
 * RuleCard View Model
 */
export default DefineMap.extend('RuleCard', {
  /** @prop rule */
  rule: {
    Type: RulesModel
  },
  /**
   * @method handleRemove
   *
   * Calls the rules destroy() method
   */
  handleRemove() {
    debug('destroy() rule', this.rule);
    this.rule.destroy().then(data => {
      debug('Destroyed rule', data);
      return data;
    });
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
});
