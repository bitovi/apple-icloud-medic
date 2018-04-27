import route from 'can-route-pushstate';
import DefineMap from 'can-define/map/map';
import Executions from '@public/models/executions';

const ViewModel = DefineMap.extend('ExecutionsTable', {
  isLoading: {
    type: 'boolean',
    get(lastSetVal, setVal){
      this.executionsPromise
        .then(() => setVal(false))
        .catch(() => setVal(false));
      return true;
    }
  },
  activeFilters: {
    default: ()=> ({})
  },
  executionsSet:{
    default: () => ({}),
    get() {
      let opts = {
        '$limit': this.limit,
        '$skip': (this.activePage - 1) * this.limit,
        'parent': null,
        'teamName': route.data.teamName
      };
      if (this.activeFilters) {
        Object.keys(this.activeFilters).forEach(filter => {
          if (filter === 'executionType') return opts.liveaction = {'is_workflow_action': true};
          let filterForValues = this.activeFilters[filter];
          //if filterForValues is an array, use the $in prop for querying
          opts[filter] = filterForValues.length > 1 ? {$in: filterForValues} : filterForValues[0];
        });
      }
      return opts;
    }
  },
  executionsPromise: {
    type: 'any',
    get() {
      console.log('Loading executions', this.executionsSet);
      return Executions.getList(this.executionsSet);
    }
  },
  dataError: {
    get(lastVal, setVal) {
      this.executionsPromise.catch(setVal);
      return null;
    }
  },
  executions: {
    Type: Executions.List,
    get(lastSetVal, setVal){
      this.executionsPromise.then(setVal);
      return lastSetVal;
    }
  },
  needsPagination: {
    get() {
      return this.totalPages > 1;
    }
  },
  /**
   * TODO: this should come from the backend.
   */
  totalPages: {
    type: 'number',
    get() {
      if (this.executions && this.executions.total) {
        return Math.ceil(this.executions.total / this.limit);
      }
      return 0;
    },
  },
  /**
   * The limit of results from the query.
   */
  limit: {
    default: 40,
    type: 'number'
  },
  /**
   * Updates the activePage when the pagination menu is clicked.
   */
  handlePaginationChange(activePage) {
    this.activePage = activePage;
  },
  /**
   * The active page for pagination.
   */
  activePage:{
    default: route.data.page || 1,
    type: 'number'
  }
});

export default ViewModel;
