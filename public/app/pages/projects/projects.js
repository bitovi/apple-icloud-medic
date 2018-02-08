import React from 'react';
import Component from 'react-view-model/component';
import ViewModel from './projects.viewmodel';
import { Button, Grid, Icon, Message } from '@public/semantic-ui/index';
import ProjectCards from '@public/components/project-cards/project-cards';

/**
 * @module ProjectsPage
 * @parent pages
 *
 * Projects Page
 */
class ProjectsPage extends Component {
  static ViewModel = ViewModel;
  /**
   * @method render
   * @returns Projects page template
   */
  render() {
    const { message } = this.viewModel;
    let messageRow;
    if (this.viewModel.message) {
      messageRow = <Grid.Column width={16}>
        <Message success><p>{message}</p></Message>
      </Grid.Column>;
    }

    return (
      <Grid padded>
        <Grid.Row>
          <Grid.Column width={15}>
            <h1>Projects</h1>
          </Grid.Column>
          <Grid.Column width={1}>
            <Icon name='pencil' size='large' className='floatRight' onClick={this.viewModel.toggleEdit}/>
          </Grid.Column>
          {messageRow}
        </Grid.Row>

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

export default ProjectsPage;
