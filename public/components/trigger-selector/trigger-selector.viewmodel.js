import makeDebug from 'debug';
import DefineMap from 'can-define/map/map';
import ObservationRecorder from 'can-observation-recorder';
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
  value: 'any',

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

  formData: 'any',

  /** list of triggertypes which can be selected */
  triggertypes: {
    Type: TriggerTypesModel.List
  },

  /** The currently selected triggertype */
  selectedTriggerType: {
    Type: TriggerTypesModel
  },

  /**
   * Handles the main "change" even for the underlying field-with-form component
   */
  handleChange({ selectedSearchResult, formData, formIsValid }) {
    if (!selectedSearchResult) {
      this.selectedTriggerType = null;
    }
    // Important - only set formData when the form is valid
    this.formData = formIsValid ? formData : null;
    if (typeof this.onChange === 'function') {
      let val = {};
      // Only dispatch change events when the form is valid
      if (formIsValid) {
        val = {
          type: selectedSearchResult.ref,
          parameters: formData
        };
      }
      this.onChange(val);
    }
  },

  /** handles the "select" event of individual search results */
  handleResultSelect(result) {
    this.formData = null;
    this.selectedTriggerType = result;
  }
});
