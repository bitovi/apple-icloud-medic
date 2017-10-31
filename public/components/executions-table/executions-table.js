import React from 'react';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/map';
import { Modal, Icon, Table, Container, Divider } from 'semantic-ui-react';

import Executions from '@public/models/executions';
import Pagination from '@public/components/pagination/';
import JSONViewer from '@public/components/json-viewer/';
import ExecutionFilters from '../execution-filters/';
import './executions-table.less';
import 'semantic-ui-css/semantic.min.css';

/*
status | timestamp | trigger type | action | action type | execution details link
[*]    |           | triggered by | params | [icon]      |

.status|.start_timestamp|
*/
class ExecutionsTable extends Component {
  render() {
    const { isLoading } = this.viewModel;
    return (
      <div className="executions-table">
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
              {this.viewModel.executions.serialize().map((execution,index) => {
                let executionPartModal = (root, prop) => {
                  if(!execution[root]){
                    return "N/A";
                  }

                  return (
                    <div>
                      <span>{execution[root][prop]}</span>
                      <Modal
                        trigger={<Icon name="unhide" />}
                        closeIcon>
                        <Modal.Header>
                          Execution {execution.id}: {root}.{prop}&nbsp;<i>({execution[root][prop]})</i>
                        </Modal.Header>
                        <Modal.Content scrolling>
                          <JSONViewer src={execution[root]} collapsed={false} />
                        </Modal.Content>
                      </Modal>
                    </div>
                  );
                };

                return (
                  <Table.Row key={execution.id}>
                    <Table.Cell>{execution.status}</Table.Cell>
                    <Table.Cell>{execution.start_timestamp.toString()}</Table.Cell>
                    <Table.Cell>{executionPartModal('trigger', 'type')}</Table.Cell>

                    <Table.Cell>{executionPartModal('liveaction', 'action')}</Table.Cell>

                    <Table.Cell>{executionPartModal('runner', 'name')}</Table.Cell>
                    <Table.Cell>
                      <a href={"/executions/" + execution.id}>
                        View Execution
                      </a>
                    </Table.Cell>
                  </Table.Row>
                )
              })}
            </Table.Body>
            <Table.Footer>
              <Table.Row textAlign="right">
                <Table.HeaderCell colSpan='6'>
                  Page: {parseInt(this.viewModel.offset/this.viewModel.limit, 10)+1}
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
      </div>
    );
  }
}

ExecutionsTable.ViewModel = DefineMap.extend('ExecutionsTable', {
  limit: {
    type: 'number',
    value: 10
  },
  offset: {
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
  },

  handleOffsetChange(newOffset){
    this.offset = newOffset;
  }

});

export default ExecutionsTable;
