import React from 'react';
import Component from 'react-view-model/component';
import route from 'can-route-pushstate';
import { Button, Form, Message } from '@public/semantic-ui/index';
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
    const {
      projectName,
      projectDescription,
      projectCategory,
      newProjectId,
      error,
      handleChange,
      handleCancel,
      handleSave
    } = this.viewModel;

    const newProjectRoute = route.url({ projectId: newProjectId }, true);

    return (
      <Form success={!!newProjectId} error={!!error && !!error.message}>
        <Message success>
          <h3>Project created successfully!</h3>
          <p><a href={newProjectRoute}>Click here</a> to see your new project!</p>
        </Message>
        <Message error>
          <h3>Error:</h3>
          <p>{error.message}</p>
        </Message>
        <Form.Field required>
          <label htmlFor="projectName">Name</label>
          <input id="projectName" value={projectName} onChange={handleChange} />
        </Form.Field>
        <Form.Field required>
          <label htmlFor="projectDescription">Description</label>
          <input id="projectDescription" value={projectDescription} onChange={handleChange} />
        </Form.Field>
        <Form.Field required>
          <label htmlFor="projectCategory">Category</label>
          <input id="projectCategory" value={projectCategory} onChange={handleChange} />
        </Form.Field>
        <Button type='reset' onClick={handleCancel}>Cancel</Button>
        <Button type='submit' onClick={handleSave}>Save</Button>
      </Form>
    );
  }
}

NewProject.ViewModel = ViewModel;

export default NewProject;
