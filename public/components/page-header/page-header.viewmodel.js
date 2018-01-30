import DefineMap from 'can-define/map/map';

/**
 * @module PageHeader VM
 * @parent PageHeader
 *
 * PageHeader View Model
 */
export default DefineMap.extend('PageHeader', {
  /**
   * @prop title
   *
   * PageHeader title
   */
  title: {
    type: 'string'
  },
  /**
   * @prop description
   *
   * description for PageHeader component
   */
  description: {
    type: 'string'
  },
  /**
   * @prop category
   *
   * category for PageHeader component
   */
  category: {
    type: 'string'
  },
  /**
   * @method toggleEdit
   *
   * Toggles edit state, passed from parent.
   */
  toggleEdit: {
    type: 'any'
  },
  /**
   * @method navigateBack
   *
   * Navigates to the previous page.
   */
  navigateBack() {
    window.history.back();
  }
});
