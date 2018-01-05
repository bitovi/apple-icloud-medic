import React from 'react';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/map';
import { Button, Label, Icon, Grid } from '@public/semantic-ui/index';

/**
 * @constructor
 */
class Pagination extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <Label size="large">
              <Icon name="file" />{this.viewModel.page}
            </Label>
          </Grid.Column>
          <Grid.Column width={13} textAlign="right">
            <Button
              onClick={this.viewModel.handlePrevClick}
              disabled={this.viewModel.page === 1}>
              Previous
            </Button>
            <Button
              onClick={this.viewModel.handleNextClick}>
              Next
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

/**
 * ViewModel
 */
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
  page:{
    get(){
      return Math.floor(this.offset/this.limit) + 1;
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
