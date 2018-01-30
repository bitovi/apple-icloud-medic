import React from 'react';
import Component from 'react-view-model/component';
import ViewModel from './project.viewmodel';
import { Container } from '@public/semantic-ui/index';
import PageHeader from '@public/components/page-header/page-header';

/**
 * @module ProjectPage
 * @parent components
 *
 * ProjectPage Description
 */
class ProjectPage extends Component {
  static ViewModel = ViewModel;

  /**
   * @method render
   * @returns template
   */
  render() {
    //props
    const { project, pages } = this.viewModel;
    //methods
    const { toggleEdit } = this.viewModel;

    return (
      <Container fluid>
        {!project ?
          <p>Loading project...</p> :
          <PageHeader
            title={project.title}
            description={project.description}
            category={project.category}
            toggleEdit={toggleEdit}
            pages={pages}
          />
        }
      </Container>
    );
  }
}

export default ProjectPage;
