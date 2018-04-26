import React from 'react';
import Component from 'react-view-model/component';
import { Table, Pagination } from '@public/semantic-ui/index';
import ExecutionRow from './execution-row/execution-row';
import ViewModel from './executions-list.viewmodel.js';


/**
 * @module ExecutionsList
 * @parent components
 *
 * ExecutionsList Description
 */
class ExecutionsList extends Component {
  /**
   * @method render
   * @returns template
   */
  render() {
    const {
      isLoading,
      dataError,
      executions,
      totalPages,
      activePage,
      needsPagination,
      handlePaginationChange
    } = this.viewModel;

    return (
      <div>
        <Table celled>
          <Table.Body>
            {(() => {
              if (isLoading) {
                return <Table.Row key="loading">
                  <Table.Cell colSpan="6">Loading...</Table.Cell>
                </Table.Row>;
              }
              if (dataError) {
                return <Table.Row key="error">
                  <Table.Cell colSpan="6">{dataError.message}</Table.Cell>
                </Table.Row>;
              }
              if (!executions || !executions.length) {
                return <Table.Row>
                  <Table.Cell colSpan="6">There are no items to display.</Table.Cell>
                </Table.Row>;
              }
              return executions.map(execution =>
                <ExecutionRow execution={execution} depth={0} key={execution.id} />
              );
            })()}
          </Table.Body>
        </Table>
        {needsPagination &&
          <Pagination
            activePage={activePage}
            totalPages={totalPages}
            onPageChange={handlePaginationChange}
          />}
      </div>
    );
  }
}

ExecutionsList.ViewModel = ViewModel;

export default ExecutionsList;
