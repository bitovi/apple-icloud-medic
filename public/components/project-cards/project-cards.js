import React from 'react';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/';
import { Card } from '@public/semantic-ui/index';
import ProjectCard from '@public/components/project-card/project-card';
import Projects from '@public/models/projects';

/**
 * @Component ProjectCards
 *
 * List of projects in a card template.
 */
class ProjectCards extends Component {
  /**
   * @method render
   *
   * @returns ProjectCard template
   */
  render() {
    const { isLoading, isEditing, projects, itemsPerRow } = this.viewModel;
    if (isLoading || !projects) {
      return <p>Loading...</p>;
    }
    if (!projects.length) {
      return <p>There are no projects to display.</p>;
    }
    return (
      <Card.Group itemsPerRow={itemsPerRow}>
        {projects.map(project => (
          <ProjectCard project={project} key={project.id} isEditing={isEditing}></ProjectCard>
        ))}
      </Card.Group>
    );
  }
}
/**
* @module ProjectCards VM
* @parent ProjectCards
*
* Project Cards View Model
*/
ProjectCards.ViewModel = DefineMap.extend('ProjectCards', {
  /**
   * Get promise for projects list.
   *
   * @returns a promise that resolves to a list of projects.
   */
  projectsPromise: {
    type: 'any',
    get() {
      return Projects.getList({});
    }
  },
  /**
   * Get list of projects
   * @type Projects.List
   * @returns a list of projects resolved from projectsPromise
   */
  projects: {
    get(lastSetVal, setVal){
      this.projectsPromise.then(projects => {
        setVal(projects);
      });
      return lastSetVal;
    },
    Type: Projects.List
  },
  /**
   * @prop isLoading
   *
   * Projects loading state.
   */
  isLoading: {
    type: 'boolean',
    value: () => false,
    get(lastSetVal, setVal){
      this.projectsPromise.then(() => {
        setVal(false);
      });
      return true;
    }
  },
  /**
   * @prop isEditing
   *
   * Project edit state allows a project to be deleted.
   */
  isEditing: {
    type: 'boolean',
    default: false
  },
  /**
   * @prop itemsPerRow
   *
   * Number of cards to be shown per row.
   * @default 3
   */
  itemsPerRow: {
    type: 'number',
    default: 3
  }
});

export default ProjectCards;
