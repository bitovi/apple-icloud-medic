import React from 'react';
import Component from 'react-view-model/component';
import ViewModel from './execution.viewmodel';
import ExecutionContent from './execution-content/';

class ExecutionPage extends Component {
  static ViewModel = ViewModel;

  render() {
    const { executionId, activeIndex } = this.viewModel;
    return <ExecutionContent query={{id: executionId}} activeIndex={activeIndex}/>;
  }
}

export default ExecutionPage;
