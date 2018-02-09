import React from 'react';
import DefineMap from 'can-define/map/map';
import { storiesOf } from '@storybook/react';
import EditForm from './edit-form';
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

storiesOf('Components', module)
  .addWithChapters('EditForm', {
    chapters: [{
      sections: [{
        title: 'Default use',
        sectionFn: () => {
          return <EditForm ItemType={SimpleModel} />;
        }
      }, {
        title: 'Success state',
        sectionFn: () => {
          return <EditForm status='success' successMessage='This is a custom success message' ItemType={SimpleModel} />;
        }
      }, {
        title: 'Error state',
        sectionFn: () => {
          return <EditForm status='error' ItemType={SimpleModel} />;
        }
      }]
    }]
  });
