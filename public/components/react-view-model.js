import React from 'react';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/map';

class ReactViewModel extends Component {
  render() {
    return (
      <div>
        <h3>React View Model: {this.viewModel.ticks} ticks</h3>
        <button onClick={this.viewModel.tick}>Tick</button>
      </div>
    );
  }
}

ReactViewModel.ViewModel = DefineMap.extend('ReactViewModel', {
  ticks: { value: 0 },
  tick () {
    this.ticks++;
  }
});

export default ReactViewModel;
