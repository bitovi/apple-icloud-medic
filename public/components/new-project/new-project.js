import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import Component from 'react-view-model/component';
import ViewModel from './new-project.viewmodel.js';

/**
 * @module NewProject
 * @parent components
 *
 * NewProject Description
 */
class NewProject extends Component {
  /**
   * @method render
   * @returns template
   */
  render() {
    return (
      <Form>
        <Form.Field>
          <label for="new-project-name">Name</label>
          <Form.Input id="new-project-name" value={this.viewModel.projectName} onChange={(e) => {this.viewModel.handleChange(e, 'projectName');}}/>
        </Form.Field>
        <Form.Field>
          <label for="new-project-desc">Description</label>
          <Form.Input id="new-project-desc" value={this.viewModel.projectDescription} onChange={(e) => {this.viewModel.handleChange(e, 'projectDescription');}}/>
        </Form.Field>
        <Form.Field>
          <label for="new-project-category">Category</label>
          <Form.Input id="new-project-category" value={this.viewModel.projectCategory} onChange={(e) => {this.viewModel.handleChange(e, 'projectCategory');}}/>
        </Form.Field>
        <Button type='reset' onClick={this.viewModel.handleCancel}>Cancel</Button>
        <Button type='submit' onClick={this.viewModel.handleSave}>Save</Button>
      </Form>
    );
  }
}

NewProject.ViewModel = ViewModel;

export default NewProject;
