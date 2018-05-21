import makeDebug from 'debug';
import DefineMap from 'can-define/map/map';
import ObservationRecorder from 'can-observation-recorder';

const debug = makeDebug('medic:components:field-with-form');

// For some reason importing the dot-prop module was not working.
// So this is a simple implementation.
const dotProp = {
  get( object, prop ) {
    var parts = prop.split('.'),
      length = parts.length,
      i,
      property = object || this;

    for ( i = 0; property && i < length; i++ ) {
      property = property[parts[i]];
    }

    return property;
  }
};

/**
 * @module TriggerSelector VM
 * @parent TriggerSelector
 *
 * TriggerSelector View Model
 */
export default DefineMap.extend('TriggerSelector', {
  /**
   * The "main" change event for this field component.
   * This only gets called when the form is valid.
   */
  onChange: 'any',
  /** Optional form label */
  label: 'string',
  value: {
    type: 'any',
    set(val) {
      return ObservationRecorder.ignore(() => {
        if (!val || !val.searchValue) {
          if (this.wasValid) {
            this.wasValid = false;
            return this.value;
          }
          debug('value.set: no value, resetting component values', val);
          this.resetAll();
          return val;
        }

        const { searchValue, formData } = val;
        const results = this.rawData.filter(item =>
          searchValue === dotProp.get(item, this.dataSearchField)
        );

        if (results.length) {
          debug('value.set: found a match', val);
          this.handleResultSelect(null, { result: results[0] });
          this.setFormData(formData);
          return val;
        }

        this.searchValue = searchValue;
        this.formData = null;
        return val;
      })();
    }
  },

  rawData: {
    type: 'any',
    set(val) {
      if (val.serialize) val = val.serialize();
      return val.map(item => Object.assign({}, item, {
        // Semantic UI search results require a title prop...
        title: dotProp.get(item, this.dataSearchField)
      }));
    }
  },
  dataSearchField: 'string',
  dataSchemaField: 'string',

  /**
   * A filtered set of data based on the search input
   * Passed from above.
   */
  results: {
    type: 'any',
    get() {
      if (!this.searchValue) return this.rawData;

      const regexp = new RegExp(this.searchValue, 'i');
      return this.rawData.filter(item => {
        const val = dotProp.get(item, this.dataSearchField);
        return regexp.test(val);
      });
    }
  },

  /**
   * The schema object for the currently selected item.
   * The object must exist and have keys.
   */
  selectedSchema: {
    get() {
      if (!this.selectedSearchResult) return null;
      const schema = dotProp.get(this.selectedSearchResult, this.dataSchemaField);
      if(!schema || !Object.keys(schema).length) return null;
      return schema;
    }
  },

  /** The value of the search input */
  searchValue: 'string',

  /** The currently selected search result */
  selectedSearchResult: 'any',

  /**
   * Holds the form data for the currently selected triggertype.
   * IMPORTANT: This will only have a value when the form is valid
   */
  formData: 'observable',

  /**
   * Whether or not the current selection and its form are complete.
   * The following are considered "valid"
   *  1. If there is no selection and no searchValue (empty)
   *  2. If there is a selection and a) no schema or b) formData
   */
  isValid: {
    get() {
      if (!this.selectedSearchResult) {
        if(this.searchValue) return false;
        return true;
      }
      return this.formIsValid;
    }
  },

  /** Whether or not this was previously complete */
  wasValid: { default: true },

  formIsValid: {
    get(lastVal) {
      if (!this.selectedSchema) {
        return true;
      }
      return lastVal || false;
    }
  },

  /** Sets the formData without dispatching a "change" event */
  setFormData(data = null) {
    if (!data || !this.formData) {
      this.formData = data;
      return;
    }
    this.formData.update(data && data.serialize ? data.serialize() : data);
  },

  /**
   * Updates the value and dispatches the primary "change"
   * event for this component.
   */
  dispatchChange(data) {
    this.setFormData(data);
    this.value = {
      formData: this.formData || {},
      searchValue: this.searchValue,
      selectedSearchResult: this.selectedSearchResult,
      isComplete: this.isValid,
      wasComplete: this.wasValid
    };
    if(typeof this.onChange === 'function') {
      this.onChange(this.value);
    }
  },

  /** Handles changes to the underlying form */
  handleFormChange(data, form) {
    debug('Form data changed:', form.isValid ? '(complete)' : '(incomplete)', data);
    this.wasValid = this.isValid;
    this.formIsValid = form.isValid;
    this.dispatchChange(data);
  },

  /** Handles the "change" event for the search input. */
  handleSearchChange(e, { value }) {
    this.wasValid = this.isValid;
    this.searchValue = value;
    this.selectedSearchResult = null;
    this.formIsValid = false;
    this.dispatchChange(null);
  },

  /** handles the "select" event of individual search results */
  handleResultSelect(ev, { result }) {
    debug('Result selected', result);
    this.selectedSearchResult = result;
    this.searchValue = dotProp.get(result, this.dataSearchField);
  },

  /**
   * Resets all important properties
   */
  resetAll() {
    this.searchValue = '';
    this.selectedSearchResult = null;
    this.formData = null;
    this.results = [];
  }
});
