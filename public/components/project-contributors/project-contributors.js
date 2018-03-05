import React from 'react';
import PropTypes from 'prop-types';
import ProjectContributor from '@public/components/project-contributor/project-contributor';
import { Segment } from '@public/semantic-ui/index';
import ProjectContributorsModel from '@public/models/project-contributors/project-contributors';
import DataProvider from '@public/components/data-provider/data-provider';

/**
 * @module ProjectContributors
 * @parent components
 *
 * ProjectContributors is the list component for the project contributors.
 */
const ProjectContributors = ({ contributors }) => {
  return (
    <Segment.Group>
      {contributors.map(contributor => (
        <ProjectContributor contributor={contributor} key={contributor.id}></ProjectContributor>
      ))}
    </Segment.Group>
  );
};

ProjectContributors.propTypes = {
  contributors: PropTypes.object // DefineLists are objects
};

export default DataProvider(ProjectContributors, ProjectContributorsModel, 'contributors');
