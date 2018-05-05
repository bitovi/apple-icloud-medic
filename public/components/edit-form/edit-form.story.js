import React from 'react';
import DefineMap from 'can-define/map/map';
import { storiesOf } from '@storybook/react';
import EditForm, { EditForm$Model } from './edit-form';
import { withCommonFields } from '@public/util/model-helper';

const definitions = withCommonFields({
  name: 'string',
  age: { type: 'number', default: 7 },
  enabled: { type: 'boolean', default: true },
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
  age: { type: 'number', value: 35 },
  gender: { type: 'enum', options: ['male', 'female', 'neutral'].map(g => ({ text: g, value: g }))}
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
      }]
    }, {
      title: 'EditForm$Model use:',
      info: 'Generates a form for a can-connect model. Pass the model constructor as the **ItemType** prop to have a formDef generated for you.',
      sections: [{
        sectionFn: () => {
          return <EditForm$Model ItemType={SimpleModel} />;
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
