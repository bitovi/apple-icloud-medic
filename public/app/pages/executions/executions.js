import React from 'react';
import Component from 'react-view-model/component';
import ViewModel from './executions.viewmodel';
import { Container } from '@public/semantic-ui/index';
import ExecutionsHeader from '@public/components/executions-header/executions-header';
import ExecutionsList from '@public/components/executions-list/executions-list';

class ExecutionsPage extends Component {
  static ViewModel = ViewModel;

  render() {
    const {
      activeFilters,
      updateActiveFilters,
    } = this.viewModel;
    return (
      <Container fluid>
        <ExecutionsHeader onFilterChange={updateActiveFilters}/>
        <ExecutionsList activeFilters={activeFilters} />
      </Container>
    );
  }
}

export default ExecutionsPage;
