import DefineMap from 'can-define/map/map';
import route from 'can-route-pushstate';
import ProjectsModel from '@public/models/projects';

/**
 * @module Project VM
 * @parent Project
 *
 * Project View Model
 */
const ProjectPage = DefineMap.extend('ProjectPage', {
  /**
   * @prop projectId
   *
   * The projectId used to get the project data.
   */
  projectId: {
    type: 'number',
    get(lastVal) {
      // lastVal will be set if passed from parent component
      return lastVal || route.data.projectId;
    }
  },
  /**
   * @prop project
   *
   * The gets the project data if it wasn't already passed into the component.
   */
  project: {
    get(lastSet, resolve) {
      if (this.projectId) {
        ProjectsModel.get({id: this.projectId}).then(result => {
          resolve(result);
        });
      }
    }
  },
  /**
   * @prop edit
   *
   * Edit state triggers page body to be editable.
   */
  edit: {
    type: 'boolean',
    default: false
  },
  /**
   * @method toggleEdit
   *
   * Toggles edit state
   */
  toggleEdit() {
    this.edit = !this.edit;
  },
  /**
   * @prop pages
   *
   * Page and route options for the page-header tabs
   */
  tabs: {
    default: [
      { title: 'Rules', tabId: 'rules' },
      { title: 'Contributors', tabId: 'contributors' },
      { title: 'Dashboard', tabId: 'dashboard' }
    ],
    type: 'array'
  }
});

export default ProjectPage;
