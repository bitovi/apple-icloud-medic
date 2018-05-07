import makeDebug from 'debug';
import DefineMap from 'can-define/map/map';
import Case from 'case';

const debug = makeDebug('medic:components:edit-form');

// Used to generate IDs where.
const ID_DELIMITER = '__';
// Default error object
const DEFAULT_ERROR = { message: 'An unknown error has occurred.' };

/**
 * @module EditForm VM
 * @parent EditForm
 *
 * EditForm View Model
 */
const EditForm = DefineMap.extend('EditForm', {
  /**
   * Settings to ...spread onto the underlying form components,
   * keyed by field name. Please see docs for individual form components.
   *
   * ```
   * {
   *   "name": { required: true, placeholder: 'Please enter your name' },
   *   "enabled": { required: true, type: 'boolean', value: true },
   *   "status": { type: 'enum', options: [{ text: 'success', value: 'success' }, { text: 'failed', value: 'failed' }]}
   * }
   * ```
   *
   * @prop formDef
   *
   */
  formDef: {
    type: 'any',
    default: () => ({}),
    set() {
      this.itemData = {};
    }
  },
  /** Whether or not to show the submit/cancel buttons */
  showButtons: {
    default: true
  },
  /**
   * @prop
   *
   * The data for the item being edited
   */
  itemData: {
    get(lastVal) {
      if (!lastVal) return {};
      return lastVal;
    }
  },
  /**
   * @prop
   *
   * Status of the form. "error" or "success"
   */
  status: 'string',
  /**
   * @prop
   *
   * A "renderable thing" (string, React element, etc) to render for the success message
   */
  successMessage: {
    type: 'any',
    default: 'New item has been created'
  },
  /**
   * @prop
   *
   * A callback function to call on succes. The function will receive
   * the result of the item's `save()` method.
   */
  successCallback: 'any',
  cancelCallback: 'any',
  onChange: 'any',
  /**
   * @prop
   *
   * An error object for any form errors. Should contain a "message" property.
   */
  error: { type: 'any', default: () => DEFAULT_ERROR },
  /**
   * @prop
   *
   * Whether or not the currently edited item is new or existing
   */
  isNew: {
    get() {
      return !this.itemData.id;
    }
  },
  isValid: {
    get() {
      return Object.keys(this.formDef).every(key => {
        const def = this.formDef[key];
        if (!def) return true;
        if (!def.required) return true;
        if (!!this.itemData[key] || this.itemData[key] === false) return true;
        return false;
      });
    }
  },
  /**
   * Converts the supplied formDef into a list of field definitions for rendering.
   */
  fieldDefinitions: {
    get() {
      const formDef = Object.keys(this.formDef).map(prop => {
        const id = this.makeIdForProp(prop);

        const fieldProps = Object.assign({
          id: id,
          key: id,
          label: Case.title(prop)
        }, this.formDef[prop]);

        if (fieldProps.options && !fieldProps.defaultValue) {
          fieldProps.defaultValue = fieldProps.options[0].value;
        }

        if (!fieldProps.onChange) {
          if (fieldProps.Field) {
            // If a Field was passed in. It must accept an onChange
            // prop which is called with the "value" as the first parameter
            fieldProps.onChange = this.handleValueChange.bind(this, prop);
          } else {
            // Handle change events for Semantic UI components
            fieldProps.onChange = this.handleSemanticChange;
          }
        }

        debug('Building fieldProps for', prop, fieldProps);
        return fieldProps;
      });
      debug('Getting form def:', formDef);
      return formDef;
    }
  },
  /**
   * @method
   * This should be the single place for updating itemData directly.
   * Also handles change events for consumer provided Field components
   */
  handleValueChange(prop, val) {
    this.itemData[prop] = val;
    if(typeof this.onChange === 'function') {
      this.onChange(this.itemData, this);
    }
  },
  /**
   * @method
   * Handles Semantic UI form component events
   */
  handleSemanticChange(e, component) {
    const prop = this.getPropFromId(component.id);

    switch(component.type) {
    case 'checkbox':
      debug('Setting data for', prop, ':', component.checked);
      this.handleValueChange(prop, component.checked);
      break;
    default:
      debug('Setting data for', prop, ':', component.value);
      this.handleValueChange(prop, component.value);
      break;
    }
  },
  /**
   * @method
   *
   * Makes an "id" to be used for an individual field
   */
  makeIdForProp(prop) {
    return 'field' + ID_DELIMITER + prop;
  },
  /**
   * @method
   *
   * Parses the field name (prop) from an ID generated using makeIdForProp()
   */
  getPropFromId(id) {
    return id.split(ID_DELIMITER)[1];
  },
  /**
   * @method
   *
   * Save new project.
   */
  handleSave(e) {
    e.preventDefault();
    let promise = Promise.resolve();

    debug('handleSave', this.itemData);
    if(typeof this.successCallback === 'function') {
      const result = this.successCallback(this.itemData);
      if(result instanceof Promise) {
        promise = result;
      } else {
        promise = promise.then(result);
      }
    }

    promise.then(result => {
      debug('Item finished saving!', result);

      this.status = 'success';
      if (this.isNew) {
        this.resetProps();
      }
    }).catch(err => {
      this.status = 'error';
      this.error = err;
    });
  },
  /**
   * @method
   *
   * Handles cancel button click.
   */
  handleCancel(e) {
    debug('handleCancel method');
    e.preventDefault();
    if (typeof this.cancelCallback === 'function') {
      this.cancelCallback(e);
    }
    this.resetProps();
  },
  /**
   * @method
   *
   * Reset new project form fields to empty strings.
   */
  resetProps() {
    debug('resetProps method');
    this.itemData = this.setItemDefaults();
    this.error = DEFAULT_ERROR;
    if (typeof this.componentReset === 'function') {
      this.componentReset();
    }
  },
  // This gets set/unset by the component during mount/unmount
  componentReset: 'any',
  /**
   * @method
   *
   * This sets the default values on the edited item.
   * This function should be overridden (passed as prop) to allow
   * custom behavior. The function will be passed a reference to the
   * edited item.
   */
  setItemDefaults() {
    if (!this.formDef) return;
    const data = Object.keys(this.formDef).reduce((obj, prop) => {
      const def = this.formDef[prop];
      // If the user defined a value, use it first
      if (def) {
        obj[prop] = def.defaultValue || def.value;
      }
      if (typeof obj[prop] === 'undefined' || obj[prop] === null) {
        // Using an empty string (vs null/undefined) tells react the component is "controlled"
        obj[prop] = '';
      }
      return obj;
    }, {});
    debug('setting default data', data);
    return data;
  },

  init () {
    if (!this.formDef || !Object.keys(this.formDef).length) {
      throw new Error('The edit form must be passed a formDef');
    }
    if(!this.itemData || !Object.keys(this.itemData).length) {
      this.resetProps();
    }
  }
});

export default EditForm;
