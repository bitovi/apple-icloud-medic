import DefineMap from 'can-define/map/map';
import route from 'can-route-pushstate';
import { PAGES } from '@root/shared/routes';
import ProjectsModel from '@public/models/projects';
import ProjectContributorsModel from '@public/models/project-contributors/project-contributors';

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
  currentUser: {
    get() {
      return route.data.currentUser;
    }
  },
  /**
   * Called when a new rule is created.
   */
  newRuleSuccess(rule) {
    route.data.tabKey = 'rules';
    route.data.tabItemId = rule.id;
  },
  /**
   * @method handleResultSelect
   *
   * Assigns the selected team member from the team-member-search to the newContributor
   * prop which is used in the contributors list component.
   */
  handleResultSelect(e, results) {
    this.addContributor(results.result.data);
  },
  /**
   * @method addContributor
   */
  addContributor(teamMember) {
    //convert the TeamMember instance into a ProjectContributor instance
    const contributor = new ProjectContributorsModel(teamMember);
    //add projectId to instance
    contributor.projectId = this.project.id;

    return contributor.save().then((contributor) => {
      this.project.contributors.push(contributor);
      this.project.save();
    }).catch(function(err){
      throw new Error(err);
    });
  },
  isProjectAdmin(user) {
    if(this.project.contributors) {
      return this.project.contributors.isProjectAdmin(user.userId);
    }
    return false;
  }
});

export default ProjectContent;
