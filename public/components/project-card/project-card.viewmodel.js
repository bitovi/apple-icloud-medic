import makeDebug from 'debug';
import DefineMap from 'can-define/map/map';
import Projects from '@public/models/projects';

const debug = makeDebug('medic:components:project-card');

/**
 * @module ProjectCard VM
 * @parent ProjectCard
 *
 * ProjectCard View Model
 */
export default DefineMap.extend('ProjectCard', {
  /**
   * @prop projectId
   *
   * The projectId used to get the project data.
   */
  projectId: {
    type: 'number'
  },
  /**
   * @prop project
   *
   * The gets the project data if it wasn't already passed into the component.
   */
  project: {
    get(lastSet, resolve) {
      if (!lastSet && this.projectId) {
        Projects.get({id: this.projectId}).then(resolve);
      }
      return lastSet;
    }
  },
  /**
   * @method handleRemove
   *
   * Removes project from list.
   */
  handleRemove() {
    this.project.destroy().then(data => {
      debug(`Project ID ${data.id}: ${data.title} deleted`, data);
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
