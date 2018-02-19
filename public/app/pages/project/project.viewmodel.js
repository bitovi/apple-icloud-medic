import DefineMap from 'can-define/map/map';
import route from 'can-route-pushstate';
import { PAGES } from '@root/shared/routes';
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
   * @prop urls
   *
   * A dictionary of different URLs for the project page
   */
  urls: {
    type: 'any',
    default() {
      const { teamName, projectId } = route.data;
      return {
        projectsList: route.url({ teamName, moduleId: PAGES.projects }),
        project: route.url({ teamName, projectId,  }),
        rulesTab: route.url({ teamName, projectId, tabId: 'rules' }),
        newRule: route.url({ teamName, projectId, tabId: 'rules', tabItemId: 'new' }),
        contributorsTab: route.url({ teamName, projectId, tabId: 'contributors' })
      };
    }
  },
  /**
   * @prop tabs
   *
   * Options for the tabbed nav component
   */
  tabs: {
    type: 'array',
    default: [
      { title: 'Rules', tabId: 'rules' },
      { title: 'Contributors', tabId: 'contributors' },
      { title: 'Dashboard', tabId: 'dashboard' }
    ]
  },
  /**
   * @prop selectedTabId
   *
   * The tabId for the currently selected tab
   */
  selectedTabId: {
    get(lastVal) {
      // lastVal will be set if passed from parent component
      return route.data.tabId || lastVal || this.tabs[0].tabId;
    }
  },
  /**
   * @prop tabItemId
   *
   * The ID for a particular item under the selected tab
   */
  tabItemId: {
    type: 'number',
    get(lastVal) {
      // lastVal will be set if passed from parent component
      return lastVal || route.data.tabItemId;
    }
  },
  /**
   * @prop isEditing
   *
   * Edit state triggers page body to be editable.
   */
  isEditing: {
    type: 'boolean',
    default: false
  },
  /**
   * @method toggleEdit
   *
   * Toggles isEditing state
   */
  toggleEdit() {
    this.isEditing = !this.isEditing;
  },
  /**
   * @method newProjectSuccess
   *
   * Called when a new project is created.
   */
  newProjectSuccess(project) {
    route.data.projectId = project.id;
  },
  /**
   * @method newRuleSuccess
   *
   * Called when a new rule is created.
   */
  newRuleSuccess(rule) {
    route.data.tabId = 'rules';
    route.data.tabItemId = rule.id;
  }
});

export default ProjectPage;
