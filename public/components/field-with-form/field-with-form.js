import React from 'react';
import Component from 'react-view-model/component';
import { Search } from '@public/semantic-ui/index';
import { EditForm$Stackstorm } from '@public/components/edit-form/edit-form';
import ViewModel from './field-with-form.viewmodel';
import { FieldWrapper, FormWrapper } from './partials';

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
      isValid,
      results,
      searchValue,
      handleResultSelect,
      handleSearchChange,
      selectedSchema,
      formData,
      handleFormChange
    } = this.viewModel;

    return (
      <FieldWrapper data-valid={isValid}>
        {label &&
          <label>{label}</label>
        }
        <Search
          onResultSelect={handleResultSelect}
          onSearchChange={handleSearchChange}
          resultRenderer={this.resultRenderer}
          results={results}
          value={searchValue}
        />
        {selectedSchema &&
          <FormWrapper>
            <EditForm$Stackstorm
              schema={selectedSchema}
              itemData={formData}
              showButtons={false}
              onChange={handleFormChange}
            />
          </FormWrapper>
        }
      </FieldWrapper>
    );
  }
}

export default TriggerSelector;
