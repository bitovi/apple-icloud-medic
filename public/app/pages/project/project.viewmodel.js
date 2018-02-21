import DefineMap from 'can-define/map/map';
import route from 'can-route-pushstate';
import { PAGES } from '@root/shared/routes';

/**
 * @module Project VM
 * @parent Project
 *
 * Project View Model
 */
const ProjectPage = DefineMap.extend('ProjectPage', {
  /**
   * The projectId used to get the project data.
   */
  projectId: {
    get(lastVal) {
      // lastVal will be set if passed from parent component
      return lastVal || route.data.projectId;
    }
  },
  /**
   * The teamId
   */
  teamId: {
    type: 'number',
    get(lastVal) {
      return lastVal || (route.data.team && route.data.team.id);
    }
  },
  /**
   * Whether or not this is a new project
   */
  isNewProject: {
    get() {
      return this.projectId === 'new';
    }
  },
  /**
   * A dictionary of different URLs for the project page
   */
  urls: {
    type: 'any',
    default() {
      const { teamName } = route.data;
      return {
        projectsList: route.url({ teamName, moduleId: PAGES.projects })
      };
    }
  },
  /**
   * @method newProjectSuccess
   *
   * Called when a new project is created.
   */
  newProjectSuccess(project) {
    route.data.projectId = project.id;
  }
});

export default ProjectPage;
