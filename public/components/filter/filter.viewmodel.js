import DefineMap from 'can-define/map/map';

/**
 * @module Filter VM
 * @parent Filter
 *
 * Filter View Model
 */
export default DefineMap.extend('Filter', {
  filterData: {
    type: 'any'
  },
  /**
   * @prop filterType
   *
   * Passed from parent and used with the options object to
   * display the correct options depending on the filter.
   *
   */
  filterType: 'string',
  formType: 'string',
  onApply: 'any',
  Model: 'any',
  handleApply() {
    this.onApply(this.selectedFilters);
  },
  selectedFilters: {
    default: () => ({})
  },
  updateSelectedFilters(e, key, value, checked) {
    e.stopPropagation();
    const selectedFilterValues = this.selectedFilters[key] || [];

    if (checked !== undefined) {
      const selectedValCopy = selectedFilterValues.slice();
      if(checked) return this.selectedFilters[key] = selectedValCopy.push(value) && selectedValCopy;
      this.selectedFilters[key] = selectedValCopy.splice(selectedValCopy.indexOf(value), 1) && selectedValCopy;
      return;
    }
    this.selectedFilters[key] = value;
  }
});
