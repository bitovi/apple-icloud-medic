import makeDebug from 'debug';
import DefineMap from 'can-define/map/map';
import Rules from '@public/models/rules';

const debug = makeDebug('medic:components:rule-card');

/**
 * @module RuleCard VM
 * @parent RuleCard
 *
 * RuleCard View Model
 */
export default DefineMap.extend('RuleCard', {
  /**
   * @prop ruleId
   *
   * The ruleId used to get the project data.
   */
  ruleId: {
    type: 'number'
  },
  /**
   * @prop project
   *
   * The gets the project data if it wasn't already passed into the component.
   */
  rule: {
    get(lastSet, resolve) {
      debug('get() rule', lastSet, this.ruleId);
      if (!lastSet && this.ruleId) {
        Rules.get({id: this.ruleId}).then(result => {
          debug('Got rule', result);
          resolve(result);
        });
      }
      return lastSet;
    }
  },
  /**
   * @method handleRemove
   *
   * Removes project from list.
   */
  handleRemove() {
    debug('destroy() rule', this.rule);
    this.rule.destroy().then(data => {
      debug('Destroyed rule', data);
    });
  },

  /**
   * @prop isEditing
   *
   * Project edit state allows a project to be deleted.
   */
  isEditing: {
    type: 'boolean',
    default: false
  },
});
