import React from 'react';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/map';
import { Dropdown, List } from 'semantic-ui-react';
import Executions from '~/models/executions';
import 'semantic-ui-css/semantic.min.css';

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
          )
        })}
        </List>
      </div>
    );
  }
}

ExecutionFilters.ViewModel = DefineMap.extend('ExecutionFilters', {
  filterTypes:{
    value: () => ['action', 'rule', 'runner', 'status', 'trigger_type', 'user']
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
      this.isLoading = true;
      Executions.getFilters({
        types: this.filterTypes.serialize()
      }).then(filters => {
        //todo: can we stream instead of setting values?
        this.isLoading = false;

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
  isLoading: {
    type: 'boolean',
    value: false
  },
  handleDropdownChange(ev, dropdownData) {
    let filtertype = dropdownData.filtertype;

    if(typeof this.onChange === 'function'){
      this.onChange(filtertype, dropdownData.value);
    }
  },
});

export default ExecutionFilters;
