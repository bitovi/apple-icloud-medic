import React from 'react';
import Component from 'react-view-model/component';
import { Pagination } from '@public/semantic-ui/index';
import ViewModel from './pagination.viewmodel';

/**
 * @constructor
 */
class PaginationControl extends Component {
  static ViewModel = ViewModel;

  render() {
    const { activePage, totalPages, handlePaginationChange } = this.viewModel;
    return (
      <Pagination
        activePage={activePage}
        totalPages={totalPages}
        onPageChange={handlePaginationChange}
      />
    );
  }
}

export default PaginationControl;
