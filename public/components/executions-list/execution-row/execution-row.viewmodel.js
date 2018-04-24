import DefineMap from 'can-define/map/map';
import Executions from '@public/models/executions';
import { PAGES } from '@root/shared/routes';
import canBatch  from 'can-event/batch/batch';
import route from 'can-route-pushstate';

const ExecutionRowVM = DefineMap.extend('ExecutionRowVM', {
  execution: { Type: Executions },
  visible: { default: true },
  expanded: { default: false },
  hasExpanded: { default: false },
  depth: 'number',
  handleExpanderClick() {
    this.expanded = !this.expanded;
    this.hasExpanded = true;
  },
  /**
   * @prop statusColor
   *
   * The color of the status label for each execution status.
   */
  statusColor: {
    default: () => {
      return {
        succeeded: 'green',
        failed: 'red',
        pending: 'yellow'
      };
    }
  },
  handleClick(){
    canBatch.start();
    route.data.moduleId = PAGES.execution;
    route.data.executionId = this.execution.id;
    canBatch.stop();
  }
});

export default ExecutionRowVM;
