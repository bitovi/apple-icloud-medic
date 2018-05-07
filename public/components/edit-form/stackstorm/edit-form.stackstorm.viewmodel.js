import makeDebug from 'debug';
import DefineMap from 'can-define/map/map';

const debug = makeDebug('medic:components:edit-form.stackstorm');

const EditForm$Stackstorm = DefineMap.extend('EditForm$Stackstorm', {
  /**
   * @prop schema
   *
   * The stackstorm schema (see triggertypes and actions)
   */
  schema: 'any',
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
      const formDef = Object.keys(this.schema).reduce((obj, field) => {
        const $field = this.schema[field];
        const def = obj[field] = {
          type: $field.type,
          required: $field.required,
          description: $field.description
        };
        if ($field.type === 'integer') {
          def.type = 'number';
        }
        // Use a text input for "anyOf". We can make this smarter in the future.
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
        Object.assign(def, this.formDef[field]);
        return obj;
      }, {});
      debug('Generated formDef for stackstorm schema', formDef);
      return formDef;
    }
  },
  init() {
    if (!this.schema) {
      throw new Error('You must pass a schema object to the EditForm$Stackstorm component.');
    }
  }
});

export default EditForm$Stackstorm;
