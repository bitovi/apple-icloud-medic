import React from 'react';
import Component from 'react-view-model/component';
import ViewModel from './executions-header.viewmodel.js';
import { DropdownWrapper } from './partials/styled';
import Filter from '@public/components/filter/filter';
import { Dropdown } from '@public/semantic-ui/index';
import PageHeader from '@public/components/page-header/page-header';
import DatePicker from '@public/components/date-picker/date-picker';
/**
 * @module ExecutionsHeader
 * @parent components
 *
 * ExecutionsHeader Description
 */
class ExecutionsHeader extends Component {
  /**
   * @method filterButtons
   * @returns a div containing collection of dropdown button components
   */
  filterButtons() {
    const { filterData, updateActiveFilters } = this.viewModel;
    const moreFilters = ['project', 'rule', 'trigger', 'action'];

    if (!filterData) {
      return <p> Loading... </p>;
    }
    const filterDataMultiple = this.formatFilterDataForDropdown(filterData, moreFilters);

    return (
      <div align="right">
        <DropdownWrapper button className='icon' floating labeled text={filterData.execution_type.title}>
          <Dropdown.Menu>
            <Filter filterData={filterData.execution_type} formType='checkbox' onApply={updateActiveFilters} onClick={e => e.stopImmediatePropagation()}/>
          </Dropdown.Menu>
        </DropdownWrapper>
        <DropdownWrapper button className='icon' floating labeled text={filterData.status.title}>
          <Dropdown.Menu>
            <Filter filterData={filterData.status} formType='checkbox' onApply={updateActiveFilters} onClick={e => e.stopImmediatePropagation()}/>
          </Dropdown.Menu>
        </DropdownWrapper>
        <DropdownWrapper button className='icon' floating labeled text='More Filters' >
          <Dropdown.Menu>
            <Filter filterData={filterDataMultiple} formType='dropdown' onApply={updateActiveFilters} onClick={e => e.stopImmediatePropagation()}/>
          </Dropdown.Menu>
        </DropdownWrapper>
        <DatePicker onDatesChange={updateActiveFilters} />
      </div>
    );
  }

  formatFilterDataForDropdown(filterData, moreFilters) {
    return moreFilters.reduce((memo, filter) => {
      if (filterData[filter]) {
        //formats the options for the semantic-ui dropdown
        filterData[filter].options = filterData[filter].options.map(option => {
          return {key: option, value: option, text: option};
        });
        memo.push(filterData[filter]);
      }
      return memo;
    }, []);
  }

  /**
   * @method render
   * @returns PageHeader template
   */
  render() {
    return <PageHeader title='Executions'> {this.filterButtons()} </PageHeader>;
  }
}

ExecutionsHeader.ViewModel = ViewModel;

export default ExecutionsHeader;
