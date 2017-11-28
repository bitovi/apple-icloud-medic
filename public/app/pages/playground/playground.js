import React from 'react';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/';
import ReactJson from 'react-json-view';

import { Button, Dropdown, TextArea, Modal } from '@public/semantic-ui/index';

import PlainReact from '@public/components/plain-react';
import ReactViewModel from '@public/components/react-view-model';
import testData_executionFilters from '@public/models/fixtures/executions/data/execution-filters';

class Playground extends Component {
  render() {
    return (
      <div className="playground">
        <PlainReact />
        <ReactViewModel />

        <br />
        <p>semantic-ui/dropdown: {this.viewModel.dropdownValue}</p>
        <Dropdown
          placeholder="status"
          search
          fluid
          selection
          loading={this.viewModel.dropdownOptionsLoading}
          options={this.viewModel.serializedDropdownOptions}
          defaultValue={this.viewModel.serializedDropdownOptions[0].value}
          onChange={this.viewModel.handleSelectChange}
        />


        <br />
        <p>semantic-ui/textarea</p>
        <TextArea
          value={this.viewModel.dropdownValue}
          onChange={this.viewModel.handleTextareaChange}
        />

        <br />
        <p>react-json-view Viewer</p>
          <ReactJson
            src={this.viewModel.src}
            theme={this.viewModel.theme}
            displayDataTypes={this.viewModel.displayDataTypes}
            collapsed={this.viewModel.collapsed}
          />


          <br />
          <p>semantic-ui/modal</p>
          <Modal
            trigger={<Button>Toggle</Button>}
            header='Reminder!'
            content='Call Benjamin regarding the reports.'
            actions={[
              'Snooze',
              { key: 'done', content: 'Done', positive: true },
            ]}
          />


      </div>
    );
  }
}

Playground.ViewModel = DefineMap.extend('Playground', {
  ticks: { value: 0 },
  tick () {
    this.ticks++;
  },

  dropdownData: {
    value: ()=>{return testData_executionFilters.status}
  },
  dropdownOptions:{
    get(){
      return this.dropdownData.map(item => { return {text: item, value: item, key: item}})
    }
  },
  serializedDropdownOptions:{
    type: 'any',
    value(){
      return this.dropdownOptions.serialize()
    }
  },
  dropdownOptionsLoading: {
    value: () => true
  },
  dropdownValue: {
    type: "string",
    value(){
      return this.dropdownData[0];
    },
    get(lastSetVal) {
      return this.dropdownOptionsLoading ? "Loading..." : lastSetVal
    }
  },
  handleDropdownChange(val,ev) {
    console.log("handleDropdownChange", arguments);
    this.dropdownValue = val;
  },
  handleSelectChange(ev,component) {
    console.log("handleSelectChange", arguments);
    this.dropdownValue = component.value;
  },
  handleTextareaChange(ev,component) {
    console.log("handleTextareaChange", arguments);
    this.dropdownValue = component.value;
  },
  dialogActive:{
    value: ()=>false
  },
  src: {
    value: ()=>{return {"hello":"world"}}
  },
  theme: {
    value: ()=>"ocean"
  },
  displayDataTypes: {
    value: ()=>false
  },
  collapsed: {
    value: ()=>true
  },
  modalOpen:{
    value: ()=>false
  },
  toggleModal(){
    this.modalOpen = !this.modalOpen;
  },
  toggleDialog(){
    this.dialogActive = !this.dialogActive;
  },
  init(){
    setTimeout(() => {
      this.dropdownOptionsLoading = false;
    }, 2000);
  }
});

export default Playground;
