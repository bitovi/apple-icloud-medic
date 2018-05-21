import makeDebug from 'debug';
import DefineMap from 'can-define/map/map';
import ActionsModel from '@public/models/actions';

const debug = makeDebug('medic:components:action-selector');

/**
 * @module ActionSelector VM
 * @parent ActionSelector
 *
 * ActionSelector View Model
 */
export default DefineMap.extend('ActionSelector', {
  /** Passed from above */
  onChange: 'any',
  label: 'string',
  value: 'any',

  /** This is passed to the underlying field-with-form component */
  formattedValue: {
    get() {
      if (!this.value) return {};

      return {
        searchValue: this.value.ref,
        formData: this.value.parameters
      };
    }
  },

  /** list of triggertypes which can be selected */
  triggertypes: {
    Type: ActionsModel.List
  },

  /**
   * Handles the main "change" even for the underlying field-with-form component
   */
  handleChange({ searchValue, formData, isComplete, wasComplete }) {
    debug('Handling change event:', searchValue, formData, isComplete, wasComplete);
    this.value = {
      ref: searchValue,
      parameters: formData
    };
    if (typeof this.onChange === 'function') {
      // Only dispatch change events when the form is valid
      if (isComplete) {
        return void this.onChange(this.value);
      }
      // If the value was complete but now is not, emit an empty value
      if (wasComplete) {
        this.onChange({});
      }
    }
  }
});
