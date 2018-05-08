import React from 'react';
import Component from 'react-view-model/component';
import TriggerTypesModel from '@public/models/triggertypes';
import DataProvider from '@public/components/data-provider/data-provider';
import FieldWithForm from '@public/components/field-with-form/field-with-form';
import ViewModel from './trigger-selector.viewmodel';

/**
 * @Component TriggerSelector
 *
 * A list of triggertypes with an onSelect callback
 */
class TriggerSelector extends Component {
  static ViewModel = ViewModel;

  render() {
    const {
      label,
      formattedValue,
      triggertypes,
      handleChange,
      handleResultSelect
    } = this.viewModel;

    return (
      <FieldWithForm
        dataSearchField='ref'
        dataSchemaField='parameters_schema.properties'
        label={label}
        rawData={triggertypes}
        value={formattedValue}
        onChange={handleChange}
        onResultSelect={handleResultSelect}
      />
    );
  }
}

export default DataProvider(TriggerSelector, TriggerTypesModel, 'triggertypes');
