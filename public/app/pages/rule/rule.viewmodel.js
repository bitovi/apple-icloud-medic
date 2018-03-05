import DefineMap from 'can-define/map/map';
import route from 'can-route-pushstate';

/**
 * @module Rule VM
 * @parent Rule
 *
 * Rule View Model
 */
const RulePage = DefineMap.extend('RulePage', {
  /**
   * The ruleId used to get the rule data.
   */
  ruleId: {
    type: 'number',
    get(lastVal) {
      // lastVal will be set if passed from parent component
      return lastVal || route.data.ruleId;
    }
  },
  /**
   * Edit state triggers page body to be editable.
   */
  isEditing: {
    type: 'boolean',
    default: false
  },
  /**
   * Toggles isEditing state
   */
  toggleEdit() {
    this.isEditing = !this.isEditing;
  }
});

export default RulePage;
