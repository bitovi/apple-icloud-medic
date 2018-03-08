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
   * Whether or not this is a project admin
   */
  isProjectAdmin: {
    type: 'boolean'
  },
  /**
   * The different levels of permissions for a project.
   */
  permissionOptions: {
    type: 'any',
    default: () => [
      { key: 'admin', value: 'admin', text: 'Admin' },
      { key: 'rw-user', value: 'rw-user', text: 'Read/Write' },
      { key: 'ro-user', value: 'ro-user', text: 'Read' }
    ]
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
