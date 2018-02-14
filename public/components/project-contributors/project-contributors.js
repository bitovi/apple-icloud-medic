import React from 'react';
import Component from 'react-view-model/component';
import ViewModel from './project-contributors.viewmodel.js';
import ProjectContributor from '@public/components/project-contributor/project-contributor';
import { Segment } from '@public/semantic-ui/index';

/**
 * @module ProjectContributors
 * @parent components
 *
 * ProjectContributors Description
 */
class ProjectContributors extends Component {
  /**
   * @method render
   * @returns template
   */
  render() {
    const { isLoading, isEditing, contributors, projectId } = this.viewModel;
    if (isLoading || !contributors) {
      return <p>Loading...</p>;
    }
    if (!contributors.length) {
      return <p>There are no contributors to display.</p>;
    }
    return (
      <Segment.Group projectid={projectId}>
        {contributors.map(contributor => (
          <ProjectContributor contributor={contributor} key={contributor.id} isEditing={isEditing}></ProjectContributor>
        ))}
      </Segment.Group>
    );
  }
}

ProjectContributors.ViewModel = ViewModel;

export default ProjectContributors;
