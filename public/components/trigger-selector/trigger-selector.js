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

  resultRenderer(tt) {
    return <div>
      <h3>{tt.name}</h3>
      <div>{tt.description}</div>
    </div>;
  }

  render() {
    const {
      label,
      formattedValue,
      results,
      selectedSchema,
      handleChange,
      handleResultSelect,
      handleSearchChange
    } = this.viewModel;

    return (
      <FieldWithForm
        label={label}
        value={formattedValue}
        results={results}
        selectedSchema={selectedSchema}
        onChange={handleChange}
        onSearchChange={handleSearchChange}
        onResultSelect={handleResultSelect}
      />
    );
  }
}

export default DataProvider(TriggerSelector, TriggerTypesModel, 'triggertypes');
