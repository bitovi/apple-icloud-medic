import React from 'react';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import { Dropdown, List } from '@public/semantic-ui/index';
import ExecutionFiltersModel from '@public/models/execution-filters';

class ExecutionFilters extends Component {
  render() {
    return (
      <div>
        <List divided horizontal size="small">
          {this.viewModel.filterTypes.map(key => {
            return (
              <List.Item key={key}>
                <Dropdown
                  search
                  selection
                  placeholder={key}
                  loading={this.viewModel.isLoading}
                  options={this.viewModel.dropdownOptions[key]}
                  onChange={this.viewModel.handleDropdownChange}
                  filtertype={key}
                />
              </List.Item>
            );
          })}
        </List>
      </div>
    );
  }
}

ExecutionFilters.ViewModel = DefineMap.extend('ExecutionFilters', {
  isLoading: {
    type: 'boolean',
    default: () => false,
    get(lastSetVal, setVal){
      this.filtersPromise.then(() => {
        setVal(false);
      });
      return true;
    }
  },
  filterTypes:{
    Type: DefineList,
    default: () => ['action', 'rule', 'runner', 'status', 'trigger_type', 'user']
  },
  filtersPromise: {
    type: 'any',
    get() {
      return ExecutionFiltersModel.find({
        types: this.filterTypes.join(',')
      });
    }
  },
  filters: {
    type: 'any',
    default(){
      const filters = {};
      this.filterTypes.forEach(type => {
        filters[type] = [];
      });
      return filters;
    },
    get(lastSetVal, setVal){
      this.filtersPromise.then(filters => {
        return setVal(filters);
      });
      return lastSetVal;
    }
  },
  dropdownOptions:{
    get(){
      return Object.keys(this.filters).reduce((obj, key) => {
        if (Array.isArray(this.filters[key])) {
          obj[key] = this.filters[key].map(item => ({ text: item, value: item, key: item }));
          obj[key].unshift({ text: 'None', value: undefined, key: 'None' });
        }
        return obj;
      }, {});
    }
  },

  handleDropdownChange(ev, dropdownData) {
    let filtertype = dropdownData.filtertype;

    if(typeof this.onChange === 'function'){
      this.onChange(filtertype, dropdownData.value);
    }
  },
});

export default ExecutionFilters;
