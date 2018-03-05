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
   * The constructor to use for bulding the form.
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
  _formDef: {
    get() {
      const definitions = this.ItemType.definitions;
      const formDef = this.getEditableKeys().map(key => {
        const def = typeof definitions[key] === 'string' ? { type: definitions[key] } : definitions[key];
        const id = this.makeIdForKey(key);
        // Build a generic props object usabel on any form component
        const props = {
          id: id,
          key: id,
          label: Case.title(key),
          onChange: this.handleChange
        };

        // Add additional props specific to individual form components.
        // See the render function to see what will be rendered for each type.
        switch (def.type) {
        case 'string':
        case 'number':
          props.type = def.type;
          break;

        case 'boolean':
          props.type = 'checkbox';
          break;
        }

        // Finally, add user defined props to override any value
        Object.assign(props, this.formDef[key]);
        debug('Building props for', key, props);
        return props;
      });
      debug('Getting form def:', formDef);
      return formDef;
    }
  },
  /**
   * @method
   *
   * Makes an "id" to be used for an individual field
   */
  makeIdForKey(key) {
    return this.ItemType.name + ID_DELIMITER + key;
  },
  /**
   * @method
   *
   * Parses the field name (key) from an ID generated using makeIdForKey()
   */
  getKeyFromId(id) {
    return id.split(ID_DELIMITER)[1];
  },
  /**
   * @method
   *
   * Gets a list of field names (keys) to be rendered in the form. This
   * filters out fields which should not be edited.
   */
  getEditableKeys() {
    const definitions = this.ItemType.definitions; // ItemType.prototype._define.definitions
    return Object.keys(definitions).filter(key => {
      return typeof definitions[key] !== 'function' && !RESERVED_PROPS.includes(key);
    });
  },
  /**
   * @method
   *
   * Updates the itemData properties when form is updated.
   */
  handleChange(e, component) {
    const prop = this.getKeyFromId(component.id);

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
    const data = this.getEditableKeys().reduce((obj, key) => {
      // If the user defined a value, use it first
      if (this.formDef[key]) {
        obj[key] = this.formDef[key].value;
      }
      // If the model defines a default, use it
      if (typeof obj[key] === 'undefined' || obj[key] === null) {
        obj[key] = this.ItemType.definitions[key].default;
      }
      // Using a string (vs null/undefined) tells react the component is "controlled"
      if (typeof obj[key] === 'undefined' || obj[key] === null) {
        obj[key] = '';
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
