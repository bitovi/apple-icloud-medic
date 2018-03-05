import DefineMap from 'can-define/map/map';
import route from 'can-route-pushstate';
import { PAGES } from '@root/shared/routes';
import ProjectsModel from '@public/models/projects';

/**
 * @module ProjectContent VM
 * @parent ProjectContent
 *
 * ProjectContent View Model
 */
const ProjectContent = DefineMap.extend('ProjectContent', {
  /**
   * The project data.
   */
  project: {
    Type: ProjectsModel
  },
  /**
   * A dictionary of different URLs for the project page
   */
  urls: {
    type: 'any',
    default() {
      const { teamName, projectId } = route.data;
      return {
        projectsList: route.url({ teamName, moduleId: PAGES.projects }),
        project: route.url({ teamName, projectId,  }),
        rulesTab: route.url({ teamName, projectId, tabKey: 'rules' }),
        newRule: route.url({ teamName, projectId, tabKey: 'rules', tabItemId: 'new' }),
        contributorsTab: route.url({ teamName, projectId, tabKey: 'contributors' })
      };
    }
  },
  /**
   * Options for the tabbed nav component
   */
  tabs: {
    type: 'any',
    default: () => [
      { key: 'rules', menuItem: 'Rules' },
      { key: 'contributors', menuItem: 'Contributors' },
      { key: 'dashboard', menuItem: 'Dashboard' }
    ]
  },
  /**
   * The tabKey for the currently selected tab
   */
  selectedTabKey: {
    get(lastVal) {
      // lastVal will be set if passed from parent component
      return route.data.tabKey || lastVal || this.tabs[0].key;
    }
  },
  /**
   * The index for the selected tab
   */
  selectedTabIndex: {
    get() {
      return this.tabs.findIndex(tab => tab.key === this.selectedTabKey);
    }
  },
  /**
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
   * Called when a new rule is created.
   */
  newRuleSuccess(rule) {
    route.data.tabKey = 'rules';
    route.data.tabItemId = rule.id;
  }
});

export default ProjectContent;
