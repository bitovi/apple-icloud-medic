import React from 'react';
import route from 'can-route-pushstate';
import Component from 'react-view-model/component';
import ViewModel from './execution.viewmodel';
import ExecutionContent from './execution-content/';

class ExecutionPage extends Component {
  static ViewModel = ViewModel;

  render() {
    const { executionId, activeIndex } = this.viewModel;
    return <ExecutionContent query={{id: executionId, teamName: route.data.teamName}} activeIndex={activeIndex}/>;
  }
}

export default ExecutionPage;
