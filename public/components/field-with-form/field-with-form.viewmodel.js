import makeDebug from 'debug';
import DefineMap from 'can-define/map/map';
import ObservationRecorder from 'can-observation-recorder';

const debug = makeDebug('medic:components:field-with-form');

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
  /** Called whenever the search field changes */
  onSearchChange: 'any',
  /** Called whenever a search result is selected */
  onResultSelect: 'any',
  /**
   * A filtered set of data based on the search input
   * Passed from above.
   */
  results: 'any',
  /**
   * The schema object for the currently selected search result.
   * Passed from above.
   */
  selectedSchema: 'any',
  /** Optional form label */
  label: 'string',
  value: {
    type: 'any',
    set(val) {
      return ObservationRecorder.ignore(() => {
        debug('Setting value prop', val);
        // DO NOT CHANGE THE FOLLOWING WITHOUT EXTENSIVE TESTING.
        // SERIOUSLY - THIS TOOK FOREVER TO GET PERFECT.
        const { searchValue, selectedSearchResult, formData } = val;
        if (!searchValue) {
          if (this.isValid) {
            // This should happen when the parent form does a "reset"
            debug('Resetting component values', val);
            this.resetAll();
          }
          return {};
        }
        // New data was passed in - update the state
        // this.handleResultSelect(null, { result: searchResult });
        this.searchValue = searchValue;
        this.selectedSearchResult = selectedSearchResult;
        this.setFormData(formData);
        return val;
      })();
    }
  },

  /** The value of the search input */
  searchValue: 'string',

  /** The currently selected search result */
  selectedSearchResult: {
    type: 'any'
  },

  /**
   * Holds the form data for the currently selected triggertype.
   * IMPORTANT: This will only have a value when the form is valid
   */
  formData: {
    type: 'observable'
  },

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
    } else {
      this.formData.update(data && data.serialize ? data.serialize() : data);
    }
  },

  /**
   * Dispatches the primary "change" event for this component.
   * This is a crucial part of this component.
   */
  dispatchChange(data) {
    this.setFormData(data);
    if(typeof this.onChange === 'function') {
      let val = {};
      if (this.selectedSearchResult) {
        val = {
          formData: this.formData || {},
          formIsValid: this.formIsValid,
          searchValue: this.searchValue,
          selectedSearchResult: this.selectedSearchResult
        };
      }
      this.onChange(val);
    }
  },

  /** Handles changes to the underlying form */
  handleFormChange(data, form) {
    debug('Form data changed:', data);
    debug('Form is valid:', form.isValid);
    this.formIsValid = form.isValid;
    this.dispatchChange(data);
  },

  /** Handles the "change" event for the search input. */
  handleSearchChange(e, { value }) {
    this.searchValue = value;
    this.selectedSearchResult = null;
    this.formIsValid = false;
    this.dispatchChange(null);
    if(typeof this.onSearchChange === 'function') {
      this.onSearchChange(value);
    }
  },

  /** handles the "select" event of individual search results */
  handleResultSelect(ev, { result }) {
    debug('Result selected', result);
    this.selectedSearchResult = result;
    this.results = [result.serialize ? result.serialize() : result];
    if (typeof this.onResultSelect === 'function') {
      this.onResultSelect(result);
    }
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
