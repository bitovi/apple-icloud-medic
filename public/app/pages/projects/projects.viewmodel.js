import DefineMap from 'can-define/map/map';

/**
 * @module Projects VM
 * @parent Projects
 *
 * Projects View Model
 */
const ProjectsPage = DefineMap.extend('ProjectsPage', {
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
