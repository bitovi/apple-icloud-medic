import DefineMap from 'can-define/map/map';

/**
 * @module ExecutionsPage VM
 * @parent ExecutionsPage
 *
 * ExecutionsPage View Model
 */
const ExecutionsPage = DefineMap.extend('ExecutionsPage', {
  /**
   * The selected filters used to construct the set query in the executions list.
   */
  activeFilters: {
    type: 'any',
    default: () => ({})
  },
  /**
   * Updates the active filters, passed into and triggered by the Filters component
   */
  updateActiveFilters(activeFilters) {
    this.activeFilters = activeFilters;
  },
});

export default ExecutionsPage;
