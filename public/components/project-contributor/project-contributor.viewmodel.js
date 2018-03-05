import DefineMap from 'can-define/map/map';
import ProjectContributors from '@public/models/project-contributors/project-contributors';

/**
 * @module ProjectContributor VM
 * @parent ProjectContributor
 *
 * ProjectContributor View Model
 */
export default DefineMap.extend('ProjectContributor', {
  /**
   * Get list of contributors
   * @type ProjectContributors
   * @returns a contributor instance resolved from contributorPromise
   */
  contributor: {
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
    default: () => [
      { key: 'Admin', value: 'Admin', text: 'Admin' },
      { key: 'Read/Write', value: 'Read/Write', text: 'Read/Write' },
      { key: 'Read', value: 'Read', text: 'Read' }
    ]
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
