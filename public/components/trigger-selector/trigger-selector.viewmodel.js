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
  value: {
    type: 'any',
    set(val) {
      return ObservationRecorder.ignore(() => {
        debug('Setting value prop', val);
        // DO NOT CHANGE THE FOLLOWING WITHOUT EXTENSIVE TESTING.
        // SERIOUSLY - THIS TOOK FOREVER TO GET PERFECT.
        const { type, parameters } = val;
        if (!type) {
          if (this.isValid) {
            // This should happen when the parent form does a "reset"
            debug('Resetting component values', val);
            this.resetAll();
          }
          return {};
        }
        // If the passed in type matches the currently select type, exit
        if (this.selectedTriggerType && type === this.selectedTriggerType.ref) return val;
        const results = this.triggertypes.filter(tt => tt.ref === type);
        if (!results.length) return {};

        // New data was passed in - update the state
        this.handleSearchChange(type);
        this.handleResultSelect(this.results[0]);
        this.formData = parameters;
        return val;
      })();
    }
  },

  /** This is passed to the underlying field-with-form component */
  formattedValue: {
    get() {
      if (!this.selectedTriggerType) return {};

      return {
        formData: this.formData,
        searchValue: this.selectedTriggerType.ref,
        selectedSearchResult: this.selectedTriggerType
      };
    }
  },

  formData: 'any',

  isValid: {
    get() {
      if (this.selectedTriggerType) {
        if (!this.selectedSchema) return true;
        return !!this.formData;
      }
      return false;
    }
  },

  /** list of triggertypes which can be selected */
  triggertypes: {
    Type: TriggerTypesModel.List
  },

  /** The currently selected triggertype */
  selectedTriggerType: {
    Type: TriggerTypesModel
  },

  /**
   * The schema object for the currently selected triggertype.
   * The object must exist and have keys.
   */
  selectedSchema: {
    get() {
      if (!this.selectedTriggerType) return null;
      const schema = this.selectedTriggerType.parameters_schema.properties;
      if(!schema || !Object.keys(schema).length) return null;
      return schema;
    }
  },

  /** A filtered set of data based on the search input */
  results: {
    type: 'any',
    set(val) {
      if (val.serialize) val = val.serialize();
      return val.map(tt => Object.assign({}, tt, {
        // Semantic UI search results require a title prop...
        title: tt.name
      }));
    }
  },

  /**
   * Handles the "change" event for the search input
   * This creates a list of results based on the input value.
   */
  handleSearchChange(value) {
    const regexp = new RegExp(value, 'i');
    this.results = this.triggertypes.filter(tt => {
      return regexp.test(tt.name) || regexp.test(tt.description) || regexp.test(tt.ref);
    });
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
  },

  resetAll() {
    this.formData = null;
    this.selectedTriggerType = null;
  }
});
