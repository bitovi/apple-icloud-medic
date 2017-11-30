import React from 'react';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/map';
import canStream from 'can-stream-kefir';
import moment from 'moment';

import { Table, Divider } from '@public/semantic-ui/index';
import { ComponentWrapper } from './partials/styled';

import Executions from '@public/models/executions';
import Pagination from '@public/components/pagination/';
import ExecutionFilters from '@public/components/execution-filters/';
import ValueWithJSON from './partials/value-with-json';

/*
status | timestamp | trigger type | action | action type | execution details link
[*]    |           | triggered by | params | [icon]      |

.status|.start_timestamp|
*/
const DATE_FORMAT = 'MMM D - h:mma';
class ExecutionsTable extends Component {
  render() {
    const { isLoading } = this.viewModel;
    return (
      <ComponentWrapper>
        <div className="filter-wrap">
          <ExecutionFilters
            filterTypes={this.viewModel.filterTypes}
            onChange={this.viewModel.handleFilterChange} />
        </div>
        <div className="table-wrap">
          <Table celled padded striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Time</Table.HeaderCell>
                <Table.HeaderCell>If (trigger)</Table.HeaderCell>
                <Table.HeaderCell>Then (action)</Table.HeaderCell>
                <Table.HeaderCell>Action Type</Table.HeaderCell>
                <Table.HeaderCell>Execution</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {(() => {
                if (isLoading) {
                  return <Table.Row key="loading">
                    <Table.Cell>Loading...</Table.Cell>
                  </Table.Row>
                }
              })()}
              {this.viewModel.executions.serialize().map((execution,index) => (
                <Table.Row key={execution.id}>
                  <Table.Cell>{execution.status}</Table.Cell>
                  <Table.Cell>{moment(execution.start_timestamp).format(DATE_FORMAT)}</Table.Cell>
                  <Table.Cell><ValueWithJSON execution={execution} valueProp='trigger.type' jsonProp='trigger' /></Table.Cell>
                  <Table.Cell><ValueWithJSON execution={execution} valueProp='liveaction.action' jsonProp='liveaction' /></Table.Cell>
                  <Table.Cell><ValueWithJSON execution={execution} valueProp='runner.name' jsonProp='runner' /></Table.Cell>
                  <Table.Cell>
                    <a href={"/executions/" + execution.id}>
                      View Execution
                    </a>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='6'>
                  <Pagination
                    limit={this.viewModel.limit}
                    offset={this.viewModel.offset}
                    onOffsetChange={this.viewModel.handleOffsetChange}
                  />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </div>
        <Divider hidden />
      </ComponentWrapper>
    );
  }
}

ExecutionsTable.ViewModel = DefineMap.extend('ExecutionsTable', {
  limit: {
    type: 'number',
    value: 10
  },
  offset: {
    // TODO: derive from streams
    type: 'number',
    value: 0
  },
  exclude_attributes: {
    value: function(){
      return ['result','trigger_instance'];
    }
  },
  isLoading: {
    type: 'boolean',
    value: () => { return false },
    get(lastSetVal, setVal){
      this.executionsPromise.then(() => {
        setVal(false);
      });
      return true;
    }
  },
  executionsSet:{
    value: () => ({}),
    get(lastSetVal){
      // TODO: Make streamable
      let opts = {
        '$limit': this.limit,
        '$skip': this.offset,
        'exclude_attributes': this.exclude_attributes.join(','),
        'parent': 'null'
      };
      this.filterTypes.forEach(type => {
        let vmProp = this["filter_" + type];
        if(typeof vmProp !== 'undefined'){
          opts[type] = vmProp;
        }
      });

      return opts;
    }
  },
  executionsPromise: {
    // TODO: use streams to determine when to fetch?
    type: 'any',
    get(lastSetVal, setVal){
      return Executions.getList(this.executionsSet);
    }
  },
  executions: {
    value: function(){
      return [];
    },
    get(lastSetVal, setVal){
      this.executionsPromise.then(executions => {
        setVal(executions);
      });
      return lastSetVal;
    }
  },

  //todo?
  // totalExecutions: {
  //   value: function(){
  //     return 0;
  //   },
  //   get(lastSetVal, setVal){
  //     let opts = clone(this.executionsSet);

  //     delete opts["$skip"];
  //     delete opts["$limit"];

  //     Executions.getList(opts).then(executions => {
  //       setVal(executions.length);
  //     });
  //     return lastSetVal;
  //   }
  // },
  filterTypes:{
    value: () => ['action', 'rule', 'runner', 'status', 'trigger_type', 'user']
  },
  filter_action: 'string',
  filter_rule: 'string',
  filter_runner: 'string',
  filter_status: 'string',
  filter_trigger_type: 'string',
  filter_user:'string',
  handleFilterChange(type, value){
    this["filter_" + type] = value;
    this.offset = 0;
  },

  handleOffsetChange(newOffset){
    this.offset = newOffset;
  }

});

export default ExecutionsTable;
