import DefineMap from 'can-define/map/map';
import route from 'can-route-pushstate';
import ExecutionsModel from '@public/models/executions';

/**
 * @module ExecutionContent VM
 * @parent ExecutionContent
 *
 * ExecutionContent View Model
 */
const ExecutionContent = DefineMap.extend('ExecutionContent', {
  /**
   * The execution data.
   */
  execution: {
    Type: ExecutionsModel
  },
  /**
   * A dictionary of different URLs for the execution page
   */
  urls: {
    type: 'any',
    default() {
      const { teamName, executionId } = route.data;
      return {
        execution: route.url({ teamName, executionId }),
        detailsTab: route.url({ teamName, executionId, tabKey: 'details' }),
        codeTab:  route.url({ teamName, executionId, tabKey: 'code' }),
        rawDataTab:  route.url({ teamName, executionId, tabKey: 'raw-data' }),
      };
    }
  },
  /**
   * Options for the tabbed nav component
   */
  tabs: {
    type: 'any',
    default: () => [
      { key: 'details', menuItem: 'Details' },
      { key: 'raw-data', menuItem: 'RawData' },
      { key: 'output', menuItem: 'Output' },
    ]
  },
  /**
   * The tabKey for the currently selected tab
   */
  selectedTabKey: {
    get(lastVal) {
      // lastVal will be set if passed from parent component
      return route.data.tabKey || lastVal || this.tabs[0].key;
    }
  },
  /**
   * The index for the selected tab
   */
  selectedTabIndex: {
    get(lastVal) {
      // lastVal will be set if passed from parent component
      return lastVal || this.tabs.findIndex(tab => tab.key === this.selectedTabKey);
    }
  },
  /**
   * The ID for a particular item under the selected tab
   */
  tabItemId: {
    type: 'number',
    get(lastVal) {
      // lastVal will be set if passed from parent component
      return lastVal || route.data.tabItemId;
    }
  }
});

export default ExecutionContent;
