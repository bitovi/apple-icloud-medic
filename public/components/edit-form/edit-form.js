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
    const { fieldDefinitions, getPropFromId, itemData } = this.viewModel;

    return fieldDefinitions.map(def => {
      const _def = Object.assign({}, def);
      const prop = getPropFromId(_def.id);
      const value = itemData[prop];

      if (_def.Field) {
        const { Field, ...rest } = _def;
        return <Field {...rest} value={value} />;
      }

      switch(_def.type) {
      case 'string':
      case 'number':
        _def.value = value;
        return <Form.Input {..._def} />;

      case 'boolean':
        _def.type = 'checkbox';
        _def.checked = value === true;
        delete _def.value;
        return <Form.Checkbox {..._def} />;
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
