import makeDebug from 'debug';
import DefineMap from 'can-define/map/map';

const debug = makeDebug('medic:components:edit-form.model');

// Reserved props will not be rendered in the form
const RESERVED_PROPS = ['id', 'createdAt', 'updatedAt'];

const EditForm$Model = DefineMap.extend('EditForm$Model', {
  /**
   * @prop ItemType
   *
   * The constructor model to use for building the form fields.
   */
  ItemType: 'any',
  /**
   * User provided formDef to be merged onto the generated Model formDef.
   * @type {String}
   */
  formDef: {
    type: 'any',
    default: () => ({})
  },
  successCallback: 'any',
  cancelCallback: 'any',
  /**
   * Creates a list of objects, each object is ...spread onto
   * the rendered form component. This should NOT be set from a parent.
   */
  _formDef: {
    get() {
      const definitions = this.ItemType.definitions;
      const formDef = this.getEditableProps().reduce((obj, prop) => {
        const def = typeof definitions[prop] === 'string' ? { type: definitions[prop] } : definitions[prop];

        // Add user defined props to override any value
        obj[prop] = Object.assign({
          type: def.type,
        }, this.formDef[prop]);

        return obj;
      }, {});
      debug('Getting form def:', formDef);
      return formDef;
    }
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
        if (typeof obj[prop] === 'function') {
          obj[prop] = obj[prop]();
        }
      }
      // Using an empty string (vs null/undefined) tells react the component is "controlled"
      if (typeof obj[prop] === 'undefined' || obj[prop] === null) {
        obj[prop] = '';
      }
      return obj;
    }, {});
    debug('setting default data', data);
    return data;
  },
  handleSave(data) {
    const copy = JSON.parse(JSON.stringify(data));
    const instance = new this.ItemType(copy);
    debug('Creating new instance', instance);
    return instance.save().then(result => {
      debug('New instance has been successfully saved!', result);
      if(typeof this.successCallback === 'function') {
        this.successCallback(result);
        return;
      }
    });
  },
  init() {
    if (!this.ItemType || !this.ItemType.definitions) {
      throw new Error('Cannot retrieve ItemType definitions.' + JSON.stringify(this.ItemType));
    }
  }
});

export default EditForm$Model;
