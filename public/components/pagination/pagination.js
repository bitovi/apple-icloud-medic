import React from 'react';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Pagination extends Component {
  render() {
    return (
      <div>
        <Button
          onClick={this.viewModel.handlePrevClick}>
          Previous
        </Button>
        <Button
          onClick={this.viewModel.handleNextClick}>
          Next
        </Button>
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
    value: 0,
    set(v){
      if(typeof this.onOffsetChange === 'function'){
        this.onOffsetChange(v);
      }
      return v;
    }
  },
  onOffsetChange:{
    type: 'any'
  },
  handlePrevClick(){
    let newOffset = this.offset - this.limit;
    if(newOffset < 0){
      newOffset = 0;
    }
    this.offset = newOffset;
  },
  handleNextClick(){
    let newOffset = this.offset + this.limit;
    this.offset = newOffset;
  }
});

export default Pagination;
