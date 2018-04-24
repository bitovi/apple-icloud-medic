import React from 'react';
import Component from 'react-view-model/component';
import ViewModel from './execution-content.viewmodel';
import { Container } from '@public/semantic-ui/index';
import ExecutionDetail from '@public/components/execution-detail/execution-detail';
import ExecutionData from '@public/components/execution-data/execution-data';
import PageHeader from '@public/components/page-header/page-header';
import PageTabs from '@public/app/page-tabs/page-tabs';
import DataProvider from '@public/components/data-provider/data-provider';
import Executions from '@public/models/executions';

class ExecutionContent extends Component {
  static ViewModel = ViewModel;

  constructor() {
    super();
    this.renderTab = this.renderTab.bind(this);
  }

  renderTab(tabKey, execution) {
    switch (tabKey) {
    case 'details':
      return <ExecutionDetail execution={execution}/>;
    case 'raw-data':
      return <ExecutionData execution={execution}/>;
    case 'output':
      return <ExecutionData execution={execution.result}/>;
    default:
      return <div>{tabKey} content coming soon!</div>;
    }
  }

  render() {
    const { activeIndex, execution, tabs, urls } = this.viewModel;

    return (
      <Container fluid>
        <PageHeader title={execution.name} />
        <PageTabs
          tabs={tabs}
          renderTab={tabKey => { return this.renderTab(tabKey, execution);}}
          baseUrl={urls.execution}
          activeIndex={activeIndex}
        />
      </Container>
    );
  }
}

export default DataProvider(ExecutionContent, Executions, 'execution');
