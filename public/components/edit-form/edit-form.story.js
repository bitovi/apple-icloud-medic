import React from 'react';
import DefineMap from 'can-define/map/map';
import { storiesOf } from '@storybook/react';
import EditForm, { EditForm$Model, EditForm$Stackstorm } from './edit-form';
import { withCommonFields } from '@public/util/model-helper';

const definitions = withCommonFields({
  name: 'string',
  enabled: { type: 'boolean', default: true },
  age: { type: 'number', default: 27 },
  gender: { type: 'any' },
  save() {
    alert('item.save() was called');
    return Promise.resolve(Object.assign(this.serialize(), { id: 1 }));
  }
});

const SimpleModel = DefineMap.extend('SimpleModel', definitions);
SimpleModel.definitions = definitions;

const formDef = {
  name: { type: 'string', required: true },
  enabled: { type: 'boolean' },
  age: { type: 'number', value: 27 },
  gender: { type: 'enum', options: ['neutral', 'male', 'female'].map(g => ({ text: g, value: g }))}
};

const schema = {
  name: { type: 'string', 'required': true },
  enabled: { type: 'boolean' },
  age: { 'anyOf': [{ 'type': 'string' }, { 'type': 'integer' }], default: 27 },
  gender: { 'enum': ['neutral', 'male', 'female'] }
};

const exampleData = {
  name: 'Ryan Wheale',
  enabled: true,
  age: 35,
  gender: 'male'
};

storiesOf('Components', module)
  .addWithChapters('EditForm', {
    chapters: [{
      title: 'Basic edit-form use:',
      info: 'Simply pass a "formDef" schema and have a form generated for you.',
      sections: [{
        sectionFn: () => {
          return <EditForm formDef={formDef} />;
        }
      }, {
        title: 'Pass "itemData" to edit an existing object.',
        sectionFn: () => {
          return <EditForm formDef={formDef} itemData={exampleData} />;
        }
      }]
    }, {
      title: 'EditForm$Model use:',
      info: 'Generates a form for a can-connect model. Pass the model constructor as the **ItemType** prop to have a formDef generated for you.',
      sections: [{
        sectionFn: () => {
          const customDef = { gender: formDef.gender };
          return <EditForm$Model ItemType={SimpleModel} formDef={customDef} />;
        }
      }, {
        title: 'Pass "itemData" to edit an existing object.',
        sectionFn: () => {
          const customDef = { gender: formDef.gender };
          return <EditForm$Model ItemType={SimpleModel} formDef={customDef} itemData={exampleData} />;
        }
      }]
    }, {
      title: 'EditForm$Stackstorm use:',
      info: 'Generates a form for a Stackstorm schema. Pass the schema as the **schema** prop to have a formDef generated for you.',
      sections: [{
        sectionFn: () => {
          return <EditForm$Stackstorm schema={schema} />;
        }
      }, {
        title: 'Pass "itemData" to edit an existing object.',
        sectionFn: () => {
          return <EditForm$Stackstorm schema={schema} itemData={exampleData} />;
        }
      }]
    }, {
      title: 'Different states:',
      sections: [{
        title: 'Success state',
        sectionFn: () => {
          return <EditForm formDef={formDef} status='success' successMessage='This is a custom success message' />;
        }
      }, {
        title: 'Error state',
        sectionFn: () => {
          return <EditForm formDef={formDef} status='error' />;
        }
      }]
    }]
  });
