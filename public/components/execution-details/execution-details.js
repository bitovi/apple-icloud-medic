import React from 'react';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/map';
import JSONViewer from '@public/components/json-viewer/';
import Executions from '@public/models/executions';

class ExecutionDetails extends Component {
  render() {
    const { execution } = this.viewModel;

    return (
      <div className="execution-details">
        <JSONViewer src={execution.serialize()} collapsed={3} />
      </div>
    );
  }
}

ExecutionDetails.ViewModel = DefineMap.extend('ExecutionDetails', {
  executionId: {
    type: 'string',
    value: ""
  },
  execution: {
    value: () => ({}),
    get(lastSetVal, setVal){
      Executions.get({ id: this.executionId }).then(execution => {
        setVal(execution);
      });
      return lastSetVal;
    }
  }
});

export default ExecutionDetails;
