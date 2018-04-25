import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/list';
import feathersClient from '@public/feathers-client';
import feathersConnection from '@public/connections/feathers';
import env from '@root/shared/env';
import makeAlgebra from './algebras/feathers';
// import Projects from './projects';
import ExecutionsData from './executions-data';

const $in = (serverVal, setVal) => {
  if (setVal && typeof setVal !== 'string') {
    if (setVal.$in) {
      return setVal.$in.indexOf(serverVal) > -1;
    }
  }
  return serverVal === setVal;
};

const Executions = DefineMap.extend('ExecutionsModel', {
  id: 'any',
  type: {
    get() {
      return this.liveaction.action_is_workflow ?
        'workflow' :
        'other';
    }
  },
  liveaction: 'any',
  action: 'any',
  workflowName: {
    get(){
      return this.type === 'workflow' ?
        this.liveaction.workflowName :
        null;
    }
  },
  rule: 'any',
  trigger: 'any',
  // project: Projects //coming soon
  start_timestamp: 'date',
  end_timestamp: 'date',
  duration: {
    get() {
      return this.rawData && this.rawData.elapsed_seconds;
    }
  },
  status: 'any',
  rawData: ExecutionsData,
  children: 'any'
});

const algebra = makeAlgebra({
  status: $in,
  type: $in,
  teamName: () => true,
  $format: () => true,
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
