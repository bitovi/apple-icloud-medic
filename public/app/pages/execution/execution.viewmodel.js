import DefineMap from 'can-define/map/map';
import route from 'can-route-pushstate';

/**
 * @module ExecutionPage VM
 * @parent ExecutionPage
 *
 * ExecutionPage View Model
 */
const ExecutionPage = DefineMap.extend('ExecutionPage', {
  /**
   * The execution id from the route.
   */
  executionId: {
    type: 'number',
    get(lastVal) {
      return lastVal || route.data.executionId;
    }
  }
});

export default ExecutionPage;
