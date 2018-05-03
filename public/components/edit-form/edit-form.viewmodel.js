import makeDebug from 'debug';
import DefineMap from 'can-define/map/map';
import Case from 'case';

const debug = makeDebug('medic:components:edit-form');

// Used to generate IDs where.
const ID_DELIMITER = '__';
// Default error object
const DEFAULT_ERROR = { message: 'An unknown error has occurred.' };
// Reserved props will not be rendered in the form
const RESERVED_PROPS = ['id', 'createdAt', 'updatedAt'];

/**
 * @module EditForm VM
 * @parent EditForm
 *
 * EditForm View Model
 */
const EditForm = DefineMap.extend('EditForm', {
  /**
   * @prop ItemType
   *
   * The constructor model to use for building the form fields.
   */
  ItemType: 'any',
  /**
   *
   * Additional settings to ...spread onto the underlying form components,
   * keyed by field name. Please see docs for individual form components.
   *
   * ```
   * {
   *   "name": { required: true, placeholder: 'Please enter your name' }
   * }
   * ```
   *
   * @prop formDef
   *
   */
  formDef: {
    type: 'any',
    default: () => ({})
  },
  /**
   * @prop
   *
   * The data for the item being edited
   */
  itemData: 'observable',
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
  /**
   * @prop
   *
   * An error object for any form errors. Should contain a "message" property.
   */
  error: 'any',
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
  /**
   * Creates a list of objects, each object is ...spread onto
   * the rendered form component. This should NOT be set from a parent.
   */
  fieldDefinitions: {
    get() {
      const definitions = this.ItemType.definitions;
      const formDef = this.getEditableProps().map(prop => {
        const def = typeof definitions[prop] === 'string' ? { type: definitions[prop] } : definitions[prop];
        const id = this.makeIdForProp(prop);

        // Add user defined props to override any value
        const fieldProps = Object.assign({
          id: id,
          key: id,
          type: def.type,
          label: Case.title(prop)
        }, this.formDef[prop]);

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
   * Handles change events for consumer provided Field components
   */
  handleValueChange(prop, val) {
    this.itemData[prop] = val;
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
      this.itemData[prop] = component.checked;
      break;
    default:
      debug('Setting data for', prop, ':', component.value);
      this.itemData[prop] = component.value;
      break;
    }
  },
  /**
   * @method
   *
   * Makes an "id" to be used for an individual field
   */
  makeIdForProp(prop) {
    return this.ItemType.name + ID_DELIMITER + prop;
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
   * Gets a list of field names (props) to be rendered in the form. This
   * filters out fields which should not be edited.
   */
  getEditableProps() {
    const definitions = this.ItemType.definitions; // ItemType.prototype._define.definitions
    return Object.keys(definitions).filter(prop => {
      return typeof definitions[prop] !== 'function' && !RESERVED_PROPS.includes(prop);
    });
  },
  /**
   * @method
   *
   * Save new project.
   */
  handleSave(e) {
    e.preventDefault();
    const instance = new this.ItemType(this.itemData);

    debug('Creating new instance', instance);
    instance.save().then(result => {
      debug('New instance has been successfully saved!', result);
      if(typeof this.successCallback === 'function') {
        this.successCallback(result);
        return;
      }
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
    this.setItemDefaults();
    this.error = DEFAULT_ERROR;
  },
  /**
   * @method
   *
   * This sets the default values on the edited item.
   */
  setItemDefaults() {
    const data = this.getEditableProps().reduce((obj, prop) => {
      // If the user defined a value, use it first
      if (this.formDef[prop]) {
        obj[prop] = this.formDef[prop].value;
      }
      // If the model defines a default, use it
      if (typeof obj[prop] === 'undefined' || obj[prop] === null) {
        obj[prop] = this.ItemType.definitions[prop].default;
      }
      // Using an empty string (vs null/undefined) tells react the component is "controlled"
      if (typeof obj[prop] === 'undefined' || obj[prop] === null) {
        obj[prop] = '';
      }
      return obj;
    }, {});
    debug('setting default data', data);
    this.itemData = new this.ItemType(data);
  },
  init () {
    if (!this.ItemType || !this.ItemType.definitions) {
      throw new Error('Cannot retrieve ItemType definitions.' + JSON.stringify(this.ItemType));
    }
    this.resetProps();
  }
});

export default EditForm;
