import React from 'react';
import Component from 'react-view-model/component';
import ViewModel from './edit-form.viewmodel';
import { Form, Message, Button } from '@public/semantic-ui/index';
import EditForm$Model from './model/edit-form.model';
import EditForm$Stackstorm from './stackstorm/edit-form.stackstorm';

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
        delete rest.id; // Temporary - Dataprovider must remove ID
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

      case 'enum':
        _def.value = value || _def.defaultValue;
        delete _def.type;
        delete _def.defaultValue;
        return <Form.Dropdown selection {..._def} />;
      }
    });
  }

  render () {
    const { error, status, successMessage, handleCancel, handleSave, showButtons } = this.viewModel;

    // If showButtons is false, it means it's being used as fields
    // for an existing form. No need to show buttons, messages, et al.
    // Just render the fields inside of a Group
    if (!showButtons) {
      return <div data-foo="bar">{this.buildFormFields()}</div>;
    }

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
export { EditForm$Model, EditForm$Stackstorm };
