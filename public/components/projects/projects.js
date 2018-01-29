import React from 'react';
import Component from 'react-view-model/component';
import ViewModel from './projects.viewmodel.js';
// import route from 'can-route-pushstate';

import { Button, Grid, Icon, Message } from '@public/semantic-ui/index';

import ProjectCards from '@public/components/project-cards/project-cards';

/**
 * @module Projects
 * @parent components
 *
 * Projects Description
 */
class Projects extends Component {
  /**
   * @method render
   * @returns Projects component template
   */
  render() {
    const { message } = this.viewModel;
    let messageTemp;
    if (this.viewModel.message) {
      messageTemp = <Message success><p>{message}</p></Message>;
    }
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={14}>
            <h1>Projects</h1>
          </Grid.Column>
          <Grid.Column width={2}>
            <Icon name='pencil' size='large' className='pull-right' onClick={this.viewModel.toggleEdit}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Column width={16}>
          {messageTemp ? messageTemp : ''}
        </Grid.Column>
        <Grid.Row>
          <Grid.Column width={8}>
            <Button as="a" href='projects/new' basic> New Project </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Column width={16}>
          <ProjectCards isEditing={this.viewModel.isEditing}></ProjectCards>
        </Grid.Column>
      </Grid>
    );
  }
}

Projects.ViewModel = ViewModel;

export default Projects;
