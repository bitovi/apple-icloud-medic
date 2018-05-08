import React from 'react';
import Component from 'react-view-model/component';
import EditForm from '@public/components/edit-form/edit-form';
import ViewModel from './edit-form.model.viewmodel';

/**
 * @module EditForm$Model
 * @parent components
 *
 * A generic form componponent for editing DefineMap Models.
 */
class EditForm$Model extends Component {
  static ViewModel = ViewModel;

  render () {
    const { _formDef, handleSave,
      // We don't want to send these value to the underlying EditForm
      successCallback, formDef, ItemType, getEditableProps, init, // eslint-disable-line no-unused-vars
      ...rest } = this.viewModel;

    return (
      <EditForm
        formDef={_formDef}
        successCallback={handleSave}
        {...rest}
      />
    );
  }
}

export default EditForm$Model;
