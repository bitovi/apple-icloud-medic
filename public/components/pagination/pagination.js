import React from 'react';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/';

class Pagination extends Component {
  render() {
    return (
      <div>
        {this.viewModel.limit} - {this.viewModel.offset} - {this.viewModel.total}
      </div>
    );
  }
}

Pagination.ViewModel = DefineMap.extend('Pagination', {
  limit: {
    type: 'number',
    value: 10
  },
  offset: {
    type: 'number',
    value: 0
  },
  total: {
    type: 'number',
    value: 0
  }
});

export default Pagination;
