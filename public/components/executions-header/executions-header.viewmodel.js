import DefineMap from 'can-define/map/map';
import ExecutionFiltersModel from '@public/models/execution-filters';

/**
 * @module ExecutionsHeader VM
 * @parent ExecutionsHeader
 *
 * ExecutionsHeader View Model
 */
export default DefineMap.extend('ExecutionsHeader', {
  filtersPromise: {
    type: 'any',
    get() {
      return ExecutionFiltersModel.find({});
    }
  },
  filterData: {
    type: 'any',
    get(lastSetVal, setVal){
      this.filtersPromise.then(filters => {
        return !filters.data ?
          setVal(filters) :
          setVal(filters.data[0]); //fixture is shaped like this
      });
      return lastSetVal;
    }
  },
  updateActiveFilters(selectedFilter) {
    const formattedFilter = this.formatSelectedFilter(selectedFilter);
    this.activeFilters = Object.assign({}, this.activeFilters, formattedFilter);
    if (typeof this.onFilterChange === 'function') this.onFilterChange(this.activeFilters);
  },
  formatSelectedFilter(filter) {
    if (filter.startDate || filter.endDate) {
      return {
        timestamp_lt: filter.endDate,
        timestand_gt: filter.startDate
      };
    }
    return filter;
  },
  activeFilters: {
    default: () => ({})
  },
  onFilterChange: 'any'
});
