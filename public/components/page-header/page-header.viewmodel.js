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
   * @method toggleEditFn
   *
   * Toggles edit state, passed from parent.
   */
  toggleEditFn: {
    type: 'any'
  },
  /**
   * @prop backUrl
   *
   * The URL to navigate to when "back" is clicked - passed from parent
   */
  backUrl: {
    type: 'string'
  }
});
