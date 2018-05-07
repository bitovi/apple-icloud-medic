import makeDebug from 'debug';
import DefineMap from 'can-define/map/map';

const debug = makeDebug('medic:components:edit-form.model');

// Reserved props will not be rendered in the form
const RESERVED_PROPS = ['id', 'createdAt', 'updatedAt'];

const EditForm$Model = DefineMap.extend('EditForm$Model', {
  /**
   * @prop ItemType
   *
   * The model constructor to use for building the form fields.
   */
  ItemType: 'any',
  /** Passed from above */
  formDef: {
    type: 'any',
    default: () => ({})
  },
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
          value: typeof def.default === 'function' ? def.default() : def.default
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
