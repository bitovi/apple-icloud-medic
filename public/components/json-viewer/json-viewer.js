import React from 'react';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/map';
import ReactJson from 'react-json-view';

/**
 * @constructor
 */
class JSONViewer extends Component {
  render() {
    return (
      <div>
        <ReactJson
          src={this.viewModel.src}
          theme={this.viewModel.theme}
          displayDataTypes={this.viewModel.displayDataTypes}
          collapsed={this.viewModel.collapsed}
        />
      </div>
    );
  }
}

JSONViewer.ViewModel = DefineMap.extend('JSONViewer', {
  src: {
    value: () => ({})
  },
  theme: {
    value: 'ocean'
  },
  displayDataTypes: {
    value: false
  },
  collapsed: {
    type: 'any',
    value: true
  }
});

export default JSONViewer;
