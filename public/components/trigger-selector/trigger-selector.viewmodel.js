import makeDebug from 'debug';
import DefineMap from 'can-define/map/map';
import TriggerTypesModel from '@public/models/triggertypes';

const debug = makeDebug('medic:components:trigger-selector');

/**
 * @module TriggerSelector VM
 * @parent TriggerSelector
 *
 * TriggerSelector View Model
 */
export default DefineMap.extend('TriggerSelector', {
  /** Passed from above */
  onChange: 'any',
  label: 'string',
  value: {
    type: 'any',
    set(val) {
      if(this.wasComplete) {
        this.wasComplete = false;
        return this.value;
      }
      return val;
    }
  },

  /** This is passed to the underlying field-with-form component */
  formattedValue: {
    get() {
      if (!this.value) return {};
      return {
        searchValue: this.value.type,
        formData: this.value.parameters
      };
    }
  },

  /** list of triggertypes which can be selected */
  triggertypes: {
    Type: TriggerTypesModel.List
  },

  /** Whether or not this field has a valid value */
  isComplete: { default: false },

  /** Whether or not this was previously complete */
  wasComplete: { default: true },

  /**
   * Handles the main "change" even for the underlying field-with-form component
   */
  handleChange({ searchValue, selectedSearchResult, formData, formIsValid }) {
    debug('Handling change event:', searchValue, formData, formIsValid);
    this.wasComplete = this.isComplete;
    this.isComplete = !!selectedSearchResult && !!formIsValid;
    this.value = {
      type: searchValue,
      parameters: formData
    };
    if (typeof this.onChange === 'function') {
      // Only dispatch change events when the form is valid
      if (this.isComplete) {
        this.onChange(this.value);
        return;
      }
      // If the value was complete but now is not, emit an empty value
      if (this.wasComplete) {
        this.onChange({});
      }
    }
  }
});
