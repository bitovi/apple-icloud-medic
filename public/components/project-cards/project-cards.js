import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@public/semantic-ui/index';
import ProjectsModel from '@public/models/projects';
import DataProvider from '@public/components/data-provider/data-provider';
import ProjectCard from '@public/components/project-card/project-card';

/**
 * @module ProjectCards
 * @parent components
 *
 * List of projects in a card template.
 */
const ProjectCards = ({ projects, isEditing, itemsPerRow = 3 }) => {
  return (
    <Card.Group itemsPerRow={itemsPerRow}>
      {projects.map(project => (
        <ProjectCard project={project} key={project.id} isEditing={isEditing}></ProjectCard>
      ))}
    </Card.Group>
  );
};

/**
 * @memberof module:ProjectCards
 */
ProjectCards.propTypes = {
  /**
   * DefineList of projects
   */
  projects: PropTypes.object,
  /**
   * Whether or not the list is in edit mode
   */
  isEditing: PropTypes.bool,
  /**
   * Number of items per row
   */
  itemsPerRow: PropTypes.number
};

export default DataProvider(ProjectCards, ProjectsModel, 'projects');
