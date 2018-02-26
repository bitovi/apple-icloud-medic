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
    default: () => ({})
  },
  theme: {
    default: 'ocean'
  },
  displayDataTypes: {
    default: false
  },
  collapsed: {
    type: 'any',
    default: true
  }
});

export default JSONViewer;
