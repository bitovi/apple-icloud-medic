import React from 'react';
import Component from 'react-view-model/component';
import route from 'can-route-pushstate';
import ViewModel from './projects.viewmodel';
import { Button, Grid, Icon, Message, Container } from '@public/semantic-ui/index';
import PageHeader from '@public/components/page-header/page-header';
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
    const { message, teamId } = this.viewModel;
    const newProjectUrl = route.url({ teamName: route.data.teamName, projectId: 'new' });

    return (
      <Container fluid>
        <PageHeader title="Projects" width={16} />
        {message ?
          <Message success><p>{message}</p></Message>
          :null}
        <Grid>
          <Grid.Column width={8}>
            <Button as="a" href={newProjectUrl} basic>New Project</Button>
          </Grid.Column>
          <Grid.Column width={8}>
            <Icon name='pencil' size='large' className='floatRight' onClick={this.viewModel.toggleEdit}/>
          </Grid.Column>
          <Grid.Column width={16}>
            <ProjectCards query={{ teamId }} isEditing={this.viewModel.isEditing}></ProjectCards>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default ProjectsPage;
