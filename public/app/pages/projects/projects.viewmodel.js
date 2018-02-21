import DefineMap from 'can-define/map/map';
import route from 'can-route-pushstate';

/**
 * @module Projects VM
 * @parent Projects
 *
 * Projects View Model
 */
const ProjectsPage = DefineMap.extend('ProjectsPage', {
  teamId: {
    type: 'number',
    get(lastVal) {
      return lastVal || (route.data.team && route.data.team.id);
    }
  },
  /**
   * @prop toggleEdit
   *
   * Method toggles isEditing state for projects.
   */
  toggleEdit(e) {
    e.preventDefault();
    this.isEditing = !this.isEditing;
  },
  /**
   * @prop isEditing
   *
   * edit state for projects.
   */
  isEditing: {
    default: false
  },
  /**
   * @prop message
   *
   * Success message to be displayed.
   */
  message: {
    type: 'string'
  }
});

export default ProjectsPage;
