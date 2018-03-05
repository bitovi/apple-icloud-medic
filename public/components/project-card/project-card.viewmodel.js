import makeDebug from 'debug';
import DefineMap from 'can-define/map/map';
import ProjectsModel from '@public/models/projects';

const debug = makeDebug('medic:components:project-card');

/**
 * @module ProjectCard VM
 * @parent ProjectCard
 *
 * ProjectCard View Model
 */
export default DefineMap.extend('ProjectCard', {
  /**
   * @prop project
   *
   * Should be passed from the parent
   */
  project: {
    Type: ProjectsModel
  },
  /**
   * @method handleRemove
   *
   * Calls the projects destroy method
   */
  handleRemove() {
    this.project.destroy().then(data => {
      debug(`Project ID ${data.id}: ${data.title} deleted`, data);
      return data;
    });
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
});
