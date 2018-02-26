import DefineMap from 'can-define/map/map';
import ProjectContributors from '@public/models/project-contributors/project-contributors';
/**
 * @module ProjectContributors VM
 * @parent ProjectContributors
 *
 * ProjectContributors View Model
 */
export default DefineMap.extend('ProjectContributors', {
  /**
   * Get promise for contributors list. Requires the projectId to be defined.
   *
   * @returns a promise that resolves to a list of contributors.
   */
  contributorsPromise: {
    type: 'any',
    get() {
      return ProjectContributors.getList({projectId:this.projectId});
    }
  },
  /**
   * Get list of contributors
   * @type ProjectContributors.List
   * @returns a list of contributors resolved from contributorsPromise
   */
  contributors: {
    get(lastSetVal, setVal){
      this.contributorsPromise.then(contributors => {
        setVal(contributors);
      });
      return lastSetVal;
    },
    Type: ProjectContributors.List
  },
  /**
   * @prop projectId
   *
   * The projectId used to get the contributors data.
   */
  projectId: {
    type: 'number'
  },
  /**
   * @prop isLoading
   *
   * ProjectContributors loading state.
   */
  isLoading: {
    type: 'boolean',
    get(lastSetVal, setVal){
      this.contributorsPromise.then(() => {
        setVal(false);
      });
      return true;
    }
  }
});
