import makeDebug from 'debug';
import React from 'react';
import Component from 'react-view-model/component';
import ViewModel from './project.viewmodel';
import { Container } from '@public/semantic-ui/index';
import PageHeader from '@public/components/page-header/page-header';
import NewProject from '@public/components/new-project/new-project';
import ProjectContent from './project-content/project-content';

const debug = makeDebug('medic:pages:project');

/**
 * @module ProjectPage
 * @parent components
 *
 * ProjectPage Description
 */
class ProjectPage extends Component {
  static ViewModel = ViewModel;

  render() {
    const { projectId, teamId, isNewProject, urls, newProjectSuccess } = this.viewModel;
    debug('RENDER', projectId);

    if (isNewProject) {
      return (
        <Container fluid>
          <PageHeader title='New Project' backUrl={urls.projectsList} />
          <NewProject teamId={teamId} successCallback={newProjectSuccess} />
        </Container>
      );
    }

    if (projectId) {
      debug('Rendering project content', projectId);
      return <ProjectContent id={projectId} />;
    }

    return <div />;
  }
}

export default ProjectPage;
