import DefineMap from 'can-define/map/map';
import route from 'can-route-pushstate';
import RulesModel from '@public/models/rules';

/**
 * @module Rule VM
 * @parent Rule
 *
 * Rule View Model
 */
const RulePage = DefineMap.extend('RulePage', {
  /**
   * The ruleId used to get the rule data.
   */
  ruleId: {
    type: 'number',
    get(lastVal) {
      // lastVal will be set if passed from parent component
      return lastVal || route.data.ruleId;
    }
  },
  /**
   * The gets the rule data if it wasn't already passed into the component.
   */
  rule: {
    get(lastSet, resolve) {
      if (this.ruleId) {
        RulesModel.get({id: this.ruleId}).then(result => {
          resolve(result);
        });
      }
    }
  },
  /**
   * A dictionary of different URLs for the rule page
   */
  urls: {
    type: 'any',
    get() {
      const { teamName, ruleId } = route.data;
      const projectId = this.rule && this.rule.projectId;
      return {
        project: projectId ? route.url({ teamName, projectId, tabKey: 'rules' }) : null,
        rule: route.url({ teamName, ruleId,  }),
        detailsTab: route.url({ teamName, ruleId, tabKey: 'details' }),
        newDetail: route.url({ teamName, ruleId, tabKey: 'details', tabItemId: 'new' })
      };
    }
  },
  /**
   * Options for the tabbed nav component
   */
  tabs: {
    type: 'array',
    default: [
      { key: 'details', menuItem: 'Details' },
      { key: 'code', menuItem: 'Code' },
      { key: 'executions', menuItem: 'Executions' },
      { key: 'dashboard', menuItem: 'Dashboard' }
    ]
  },
  /**
   * The tabKey for the currently selected tab
   */
  selectedTabKey: {
    get() {
      return route.data.tabKey || this.tabs[0].key;
    }
  },
  /**
   * The index for the currently selected tab
   */
  selectedTabIndex: {
    get() {
      return this.tabs.findIndex(tab => tab.key === this.selectedTabKey);
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
  },
  /**
   * Edit state triggers page body to be editable.
   */
  isEditing: {
    type: 'boolean',
    default: false
  },
  /**
   * Toggles isEditing state
   */
  toggleEdit() {
    this.isEditing = !this.isEditing;
  }
});

export default RulePage;
