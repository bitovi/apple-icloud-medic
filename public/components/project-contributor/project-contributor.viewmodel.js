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
   * Get promise for contributor list.
   *
   * @returns a promise that resolves to a list of contributor.
  */
  contributorPromise: {
    type: 'any',
    get() {
      return ProjectContributors.get({id: this.contributorId});
    }
  },
  /**
   * Get list of contributor
   * @type ProjectContributors
   * @returns a list of contributor resolved from contributorPromise
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

  permissionOptions: {
    value: [
      { key: 'Admin', value: 'Admin', text: 'Admin' },
      { key: 'Read/Write', value: 'Read/Write', text: 'Read/Write' },
      { key: 'Read', value: 'Read', text: 'Read' }
    ],
    Type: DefineList
  },

  handlePermissionsChange(ev, data) {
    if (this.contributor.permissions != data.value) {
      this.contributor.permissions = data.value;
      this.contributor.save();
    }
  }
});
