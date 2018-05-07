import React from 'react';
import Component from 'react-view-model/component';
import EditForm from '@public/components/edit-form/edit-form';
import ViewModel from './edit-form.stackstorm.viewmodel';

/**
 * @module EditForm$Stackstorm
 * @parent components
 *
 * A generic form componponent for editing Stackstorm schemas
 */
class EditForm$Stackstorm extends Component {
  static ViewModel = ViewModel;

  render () {
    const { _formDef, formDef, init, schema, foo, ...rest } = this.viewModel;  // eslint-disable-line no-unused-vars

    return (
      <EditForm
        formDef={_formDef}
        {...rest}
      />
    );
  }
}

export default EditForm$Stackstorm;
