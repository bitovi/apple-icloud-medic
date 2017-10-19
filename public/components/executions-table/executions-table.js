import React from 'react';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/map';
import Executions from 'medic/public/models/executions';
import Pagination from 'medic/public/components/pagination/';

/*
status | timestamp | trigger type | action | action type | execution details link
[*]    |           | triggered by | params | [icon]      |

.status|.start_timestamp|
*/
class ExecutionsTable extends Component {
  render() {
    return (
      <div>
        <div className="filter-wrap">ToDo: filter</div>
        <div className="pagination-wrap">
          <Pagination limit={this.viewModel.limit} offset={this.viewModel.offset} total={this.viewModel.totalExecutions} />
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Status</th>
                <th>Time</th>
                <th>If (trigger)</th>
                <th>Then (action)</th>
                <th>Action Type</th>
                <th>Execution</th>
              </tr>
            </thead>
            <tbody>
              {this.viewModel.executions.serialize().map((execution,index) => {
                return (
                  <tr key={execution.id}>
                    <td>{execution.status}</td>
                    <td>{execution.start_timestamp.toString()}</td>
                    <td>If (trigger)</td>

                    <td>
                      <span>action identifier</span><br />
                      <span>action params</span>
                    </td>

                    <td>
                      Action Type<br />
                      icon
                    </td>
                    <td>Execution: { execution.id }</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
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
  executions: {
    value: function(){
      return [];
    },
    get(lastSetVal, setVal){
      Executions.getList({
        '$limit': this.limit,
        '$skip': this.offset,
        // 'exclude_attributes': this.exclude_attributes.join(',')
      }).then(executions => {
        setVal(executions);
      });
      return lastSetVal;
    }
  },
  totalExecutions: {
    value: function(){
      return 0;
    },
    get(lastSetVal, setVal){
      Executions.getList({
      }).then(executions => {
        console.log("executions",executions)
        setVal(executions.length);
      });
      return lastSetVal;
    },
    set(v){
      console.log("setting executions",v);
      return v;
    }
  }
});

export default ExecutionsTable;
