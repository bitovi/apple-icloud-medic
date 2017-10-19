import React from 'react';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/';
import ReactJson from 'react-json-view'

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
    value: ()=>{return {}}
  },
  theme: {
    value: ()=>"ocean"
  },
  displayDataTypes: {
    value: ()=>false
  },
  collapsed: {
    value: ()=>true
  }
});

export default JSONViewer;
