import React from 'react';
import Component from 'react-view-model/component';
import ActionsModel from '@public/models/actions';
import DataProvider from '@public/components/data-provider/data-provider';
import FieldWithForm from '@public/components/field-with-form/field-with-form';
import ViewModel from './action-selector.viewmodel';

/**
 * @Component ActionSelector
 *
 * A list of actions with an onSelect callback
 */
class ActionSelector extends Component {
  static ViewModel = ViewModel;

  render() {
    const {
      label,
      formattedValue,
      actions,
      handleChange
    } = this.viewModel;

    return (
      <FieldWithForm
        dataSearchField='ref'
        dataSchemaField='parameters'
        rawData={actions}
        label={label}
        value={formattedValue}
        onChange={handleChange}
      />
    );
  }
}

export default DataProvider(ActionSelector, ActionsModel, 'actions');
