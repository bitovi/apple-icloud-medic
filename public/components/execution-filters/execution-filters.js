import React from 'react';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/map';
import { Dropdown, List } from '@public/styled-components/index';
import Executions from '@public/models/executions';

class ExecutionFilters extends Component {
  render() {
    return (
      <div>
        <List divided horizontal size="small">
        {this.viewModel.filterTypes.serialize().map(key => {
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
    value: () => { return false },
    get(lastSetVal, setVal){
      this.filtersPromise.then(() => {
        setVal(false);
      });
      return true;
    }
  },
  filterTypes:{
    value: () => ['action', 'rule', 'runner', 'status', 'trigger_type', 'user']
  },
  filtersPromise: {
    type: 'any',
    get(lastSetVal, setVal){
      return Executions.getFilters({
        types: this.filterTypes.join(',')
      });
    }
  },
  filters: {
    value(){
      let filters = {};
      this.filterTypes.forEach(type => {
        filters[type] = [];
      })
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
      let filterObj = this.filters.serialize();

      //format
      for(var k in filterObj){
        if(typeof filterObj[k].map === 'function'){
          filterObj[k] = filterObj[k].map(item => { return {text: item, value: item, key: item}})
          filterObj[k].unshift({text: "None", value: undefined, key: "None"})
        }
      }

      return filterObj;
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
