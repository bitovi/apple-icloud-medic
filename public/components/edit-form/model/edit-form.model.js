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
    const { _formDef, handleSave, cancelCallback, setItemDefaults } = this.viewModel;

    return (
      <EditForm
        formDef={_formDef}
        successCallback={handleSave}
        cancelCallback={cancelCallback}
        setItemDefaults={setItemDefaults}
      />
    );
  }
}

export default EditForm$Model;
