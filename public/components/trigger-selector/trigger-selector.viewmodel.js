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
      const { type, parameters } = val;
      if (!type) {
        if (this.isValid) this.resetAll();
        return {};
      }
      if (this.selectedTriggerType && type === this.selectedTriggerType.ref) return val;
      const results = this.triggertypes.filter(tt => tt.ref === type);
      if (!results.length) return {}; // not found, ignore value

      this.handleResultSelect(null, { result: results[0] });
      this.setFormData(parameters);
      return val;
    }
  },

  /** list of triggertypes which can be selected */
  triggertypes: {
    Type: TriggerTypesModel.List
  },

  /** The value of the search input */
  searchValue: { type: 'string', default: '' },

  selectedTriggerType: {
    Type: TriggerTypesModel
  },

  selectedFormDef: {
    get() {
      if (!this.selectedTriggerType) return null;
      const schema = this.selectedTriggerType.parameters_schema.properties;
      if(!schema) return null;
      const keys = Object.keys(schema);
      if(!keys.length) return null;

      const formDef = keys.reduce((obj, field) => {
        const $field = schema[field];
        const def = obj[field] = {
          type: $field.type,
          required: $field.required,
          description: $field.description
        };
        // Use a text input for "anyOf". We can make this smarter in the future.
        if ($field.type === 'integer') {
          def.type = 'number';
        }
        if ($field.anyOf) {
          def.type = 'string';
        }
        if ($field.minimum) {
          def.type = 'number';
          def.min = def.minimum;
        }
        if ($field.maximum) {
          def.type = 'number';
          def.max = def.maximum;
        }
        if ($field.enum) {
          def.type = 'enum';
          def.options = $field.enum.map(val => ({ text: val, value: val }));
          def.defaultValue = def.options[0].value;
        }
        return obj;
      }, {});
      return formDef;
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

  // This will only have a value when the form is valid
  formData: { default: () => ({}) },
  isValid: {
    get() {
      if (!this.selectedTriggerType) {
        if(this.searchValue) return false;
        return true;
      }
      return !this.selectedFormDef || !!this.formData;
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
      if (this.isValid) {
        val = {
          type: this.selectedTriggerType.ref,
          parameters: this.formData || {}
        };
      }
      this.onChange(val);
    }
  },

  handleFormChange(data, form) {
    this.dispatchChange(form.isValid ? data : null);
  },

  /** handles the "select" event of individual tiggertypes */
  handleResultSelect(ev, { result }) {
    this.selectedTriggerType = result;
    this.searchValue = result.ref; // set this last
    this.results = [result.serialize ? result.serialize() : result];
  },

  handleSearchChange(e, { value }) {
    this.searchValue = value;
    this.selectedTriggerType = null;
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
