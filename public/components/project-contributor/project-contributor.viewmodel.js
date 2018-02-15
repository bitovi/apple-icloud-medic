import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import ProjectContributors from '@public/models/project-contributors/project-contributors';

/**
 * @module ProjectContributor VM
 * @parent ProjectContributor
 *
 * ProjectContributor View Model
 */
export default DefineMap.extend('ProjectContributor', {
  /**
   * @prop contributorId
   *
   * The contributorId used to get the contributor data.
   */
  contributorId: {
    type: 'number'
  },

  /**
   * Get promise for single contributor.
   *
   * @returns a promise that resolves to a contributor.
  */
  contributorPromise: {
    type: 'any',
    get() {
      return ProjectContributors.get({id: this.contributorId});
    }
  },
  /**
   * Get list of contributors
   * @type ProjectContributors
   * @returns a contributor instance resolved from contributorPromise
   */
  contributor: {
    get(lastSetVal, setVal){
      this.contributorPromise.then(contributor => {
        setVal(contributor);
      });
      return lastSetVal;
    },
    Type: ProjectContributors
  },
  /**
   * @method handleRemove
   *
   * Removes contributor from project.
   */
  handleRemove() {
    this.contributor.destroy();
  },
  /**
   * @prop permissionsOptions
   *
   * The different levels of permissions for a project.
   */
  permissionOptions: {
    value: [
      { key: 'Admin', value: 'Admin', text: 'Admin' },
      { key: 'Read/Write', value: 'Read/Write', text: 'Read/Write' },
      { key: 'Read', value: 'Read', text: 'Read' }
    ],
    Type: DefineList
  },
  /**
   * @method handlePermissionsChange
   *
   * Updates permission property for a contributor.
   */
  handlePermissionsChange(ev, data) {
    if (this.contributor.permissions != data.value) {
      this.contributor.permissions = data.value;
      this.contributor.save();
    }
  }
});
