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
      ObservationRecorder.ignore(() => {
        // DO NOT CHANGE THE FOLLOWING WITHOUT EXTENSIVE TESTING.
        // SERIOUSLY - THIS TOOK FOREVER TO GET PERFECT.
        const { type, parameters } = val;
        if (!type) {
          if (this.isValid) {
            // This should happen when the parent form does a "reset"
            this.resetAll();
          }
          return {};
        }
        // If the passed in type matches the currently select type, exit
        if (this.selectedTriggerType && type === this.selectedTriggerType.ref) return val;
        // The the passed in type does not exist, ignore the value
        const results = this.triggertypes.filter(tt => tt.ref === type);
        if (!results.length) return {};
        // New data was passed in - update the state
        this.handleResultSelect(null, { result: results[0] });
        this.setFormData(parameters);
        return val;
      })();
    }
  },

  /** list of triggertypes which can be selected */
  triggertypes: {
    Type: TriggerTypesModel.List
  },

  /** The value of the search input */
  searchValue: 'string',

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
      return val.map(tt => Object.assign({}, tt, {
        // Semantic UI search results require a title prop...
        title: tt.name
      }));
    }
  },

  /**
   * Holds the form data for the currently selected triggertype.
   * IMPORTANT: This will only have a value when the form is valid
   */
  formData: { default: () => ({}) },

  /**
   * Whether or not the current selection and its form are complete.
   * The following are considered "valid"
   *  1. If there is no selection and no searchValue (empty)
   *  2. If there is a selection and a) no schema or b) formData
   */
  isValid: {
    get() {
      if (!this.selectedTriggerType) {
        if(this.searchValue) return false;
        return true;
      }
      return !this.selectedSchema || !!this.formData;
    }
  },

  setFormData(data = null) {
    if (!data || !this.formData) {
      this.formData = data;
    } else {
      this.formData.update(data);
    }
  },

  dispatchChange(data) {
    this.setFormData(data);
    if(typeof this.onChange === 'function') {
      let val = {};
      if (this.selectedTriggerType && this.isValid) {
        val = {
          type: this.selectedTriggerType.ref,
          parameters: this.formData || {}
        };
      }
      this.onChange(val);
    }
  },

  handleFormChange(data, form) {
    // This is crucial: don't dispatch the data until the form is valid.
    this.dispatchChange(form.isValid ? data : null);
  },

  /** handles the "select" event of individual tiggertypes */
  handleResultSelect(ev, { result }) {
    this.searchValue = result.ref;
    this.selectedTriggerType = result;
    this.results = [result.serialize ? result.serialize() : result];
  },

  /**
   * Handles the "change" event for the search input
   * This creates a list of results based on the input value.
   */
  handleSearchChange(e, { value }) {
    this.searchValue = value;
    this.selectedTriggerType = null;
    this.dispatchChange(null);
    const regexp = new RegExp(value, 'i');
    this.results = this.triggertypes.filter(tt => {
      return regexp.test(tt.name) || regexp.test(tt.description) || regexp.test(tt.ref);
    }).serialize();
  },

  resetAll() {
    this.searchValue = '';
    this.selectedTriggerType = null;
    this.formData = null;
    this.results = [];
  }
});
