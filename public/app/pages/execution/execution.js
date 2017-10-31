import React from 'react';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/';
import ExecutionDetails from '@public/components/execution-details/';
import PropTypes from 'prop-types';

class ExecutionPage extends Component {
  // add appState
  static contextTypes = {
    appState: PropTypes.object
  }

  render() {
    let { appState } = this.context;

    return (
      <div className="execution-page">
        <h1>Execution</h1>
        <ExecutionDetails executionId={appState.executionId} />
      </div>
    );
  }
}

ExecutionPage.ViewModel = DefineMap.extend('ExecutionPage', {

});

export default ExecutionPage;

