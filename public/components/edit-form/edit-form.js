import React from 'react';
import Component from 'react-view-model/component';
import ViewModel from './edit-form.viewmodel';
import { Form, Message, Button } from '@public/semantic-ui/index';

/**
 * @module EditForm
 * @parent components
 *
 * A generic form componponent for editing well-defined Types.
 */
class EditForm extends Component {
  static ViewModel = ViewModel;

  buildFormFields () {
    return this.viewModel._formDef.map(def => {
      const key = this.viewModel.getKeyFromId(def.id);
      const value = this.viewModel.itemData[key];

      switch(def.type) {
      case 'string':
      case 'number':
        def.value = value;
        return <Form.Input {...def} />;

      case 'checkbox':
        def.checked = value === true;
        return <Form.Checkbox {...def} />;
      }
    });
  }

  render () {
    const { error, status, successMessage, handleCancel, handleSave } = this.viewModel;

    return (
      <Form success={status === 'success'} error={status === 'error'}>
        <Message success>
          {(typeof successMessage === 'string') ?
            <div>
              <h3>Success!</h3>
              <p>{successMessage}</p>
            </div>
            : successMessage}
        </Message>
        <Message error>
          <h3>Error!</h3>
          <p>{error.message}</p>
        </Message>

        {this.buildFormFields()}

        <Button secondary basic type='reset' onClick={handleCancel}>Cancel</Button>
        <Button primary type='submit' onClick={handleSave}>Save</Button>
      </Form>
    );
  }
}

export default EditForm;
