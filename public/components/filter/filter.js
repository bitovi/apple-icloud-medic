import React from 'react';
import Component from 'react-view-model/component';
import ViewModel from './filter.viewmodel.js';
import { Button, Form } from '@public/semantic-ui/index';
import { ComponentWrapper } from './partials/styled';

/**
 * @module Filter
 * @parent components
 *
 * Filter Description
 */
class Filter extends Component {
  /**
   * @method render
   */
  render() {
    const { filterData, formType } = this.viewModel;
    const { /*handleReset,*/ handleApply, updateSelectedFilters } = this.viewModel;

    const renderMethods = {
      'checkbox': 'renderCheckbox',
      'dropdown': 'renderDropdown'
    };
    const filterDataKey = filterData.key || filterData.map(data => data.key);
    return (
      <ComponentWrapper onChange={updateSelectedFilters} onClick={e => e.stopPropagation()}>
        {filterData.length ?
          this.renderMultiple(filterData, this[renderMethods[formType]]) :
          this[renderMethods[formType]](filterData)
        }
        <Form.Group inline>
          {/* <Button basic onClick={() => handleReset(filterDataKey)}>Reset</Button> */}
          <Button primary onClick={() => { handleApply(filterDataKey);}}>Apply</Button>
        </Form.Group>
      </ComponentWrapper>
    );
  }

  renderCheckbox(filterData) {
    const { updateSelectedFilters } = this.viewModel;
    return (
      <Form.Group grouped onChange={(e) => updateSelectedFilters(e, filterData.key,e.target.value, e.target.checked)} >
        <label>{filterData.title}</label>
        {
          filterData.options.map(option => {
            return (
              <Form.Field onClick={e => e.stopPropagation()} key={option}>
                <label> {option} </label>
                <input  type='checkbox' key={option} value={option} />
              </Form.Field>
            );
          })
        }
      </Form.Group>
    );
  }

  renderMultiple(filterData, renderFn) {
    return filterData.map(formSection => {
      return renderFn.call(this, formSection);
    });
  }

  renderDropdown(filterData) {
    const { selectedFilters, updateSelectedFilters } = this.viewModel;
    return (
      <div key={filterData.title} onClick={e => e.stopPropagation()}>
        <p>{filterData.title}</p>
        <Form.Select
          onChange={(e, { value }) => {
            updateSelectedFilters(e, filterData.key, value);
          }}
          placeholder={filterData.title}
          options={filterData.options}
          value={selectedFilters[filterData.key]}
          fluid multiple selection
        />
      </div>
    );
  }
}

Filter.ViewModel = ViewModel;

export default Filter;
