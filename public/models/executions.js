import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/list';
import feathersClient from '@public/feathers-client';
import feathersConnection from '@public/connections/feathers';
import env from '@root/shared/env';
import makeAlgebra from './algebras/feathers';

const $in = (serverVal, setVal) => {
  if (setVal && typeof setVal !== 'string') {
    if (setVal.$in) {
      return setVal.$in.indexOf(serverVal) > -1;
    }
  }
  return serverVal === setVal;
};

// useful for object properties
const ANY_OBJ = {
  type: 'any',
  default: () => ({})
};

const Executions = DefineMap.extend('ExecutionsModel', {
  name: {
    get() {
      if (this.context.mistral && this.context.mistral.task_name) {
        return this.context.mistral.task_name;
      } else if (this.liveaction && this.liveaction.action) {
        return this.liveaction.action;
      } else if (this.liveaction && this.liveaction.workflowName) {
        return this.liveaction.workflowName;
      } else {
        return 'unknown';
      }
    }
  },
  type: {
    get() {
      return this.liveaction.action_is_workflow ?
        'workflow' :
        'other';
    }
  },
  id: 'any',
  start_timestamp: 'date',
  end_timestamp: 'date',
  elapsed_seconds: 'number',
  status: 'any',
  children: 'any',
  liveaction: ANY_OBJ,
  action: ANY_OBJ,
  rule: ANY_OBJ,
  trigger: ANY_OBJ,
  context: ANY_OBJ,
});

const algebra = makeAlgebra({
  status: $in,
  type: $in,
  $missing(serverVal, setVal, serverItem) {
    const fields = setVal;
    return fields.every(field => !serverItem.hasOwnProperty(field));
  },
  parent(serverVal, setVal, serverItem) {
    if (('' + setVal) === 'null') {
      return !serverItem.hasOwnProperty('parent') || ('' + serverVal) === 'null';
    }
    return true;
  }
});

const url = `${env.API_BASE_URI}/executions`;
const service = feathersClient.service(url);

Executions.List = DefineList.extend('ExecutionsListModel',{
  '#': Executions
});


Executions.connection = feathersConnection({
  url,
  Map: Executions,
  List: Executions.List,
  name: 'executions',
  algebra,
  feathersService: service
});

export default Executions;
