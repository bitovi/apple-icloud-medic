import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import set from 'can-set';
import feathersClient from '../feathers-client';
import lightConnection from '../connections/light';
import env from 'medic/shared/env';
import ajax from 'can-ajax';


const Executions = DefineMap.extend({
    "status": "string",
    "start_timestamp": "date",
    "end_timestamp": "date",
    "log": 'any', //[]
    "parameters": 'any', //{}
    "runner": 'any', //{}
    "elapsed_seconds": "number",
    "web_url": "string",
    "parent": "string",
    "result": 'any', //{}
    "context": 'any', //{}
    "action": 'any', //{}
    "liveaction": 'any', //{}
    "trigger_type": 'any', //{}
    "rule": 'any', //{}
    "trigger_instance": 'any', //{}
    "trigger": {
      type: 'any',
      value: () => ({})
    },
    "id": "string"
});


const ExecutionFilters = DefineMap.extend({
    "status": 'any', //[]
    "trigger_type": 'any', //[]
    "runner": 'any', //[]
    "rule": 'any', //[]
    "trigger": 'any', //[]
    "user": 'any', //[]
    "action": 'any', //[]
});

//TODO: merge algebra with medic/public/models/algebras (or wherever)
const algebra = new set.Algebra(
  set.props.id('id'),
  {
    status(serverVal, setVal) {
      if (typeof setVal !== 'undefined'){
        return serverVal === setVal
      }
      return true;
    },
    runner(serverVal, setVal) {
      if (typeof setVal !== 'undefined'){
        return serverVal.name === setVal
      }
      return true;
    },
    user(serverVal, setVal, serverItem) {
      if (typeof setVal !== 'undefined'){
        return serverItem.context.user === setVal
      }
      return true;
    },
    action(serverVal, setVal) {
      if (typeof setVal !== 'undefined'){
        return serverVal.ref === setVal
      }
      return true;
    },
    trigger_type(serverVal, setVal) {
      if (typeof setVal !== 'undefined'){
        return serverVal.name === setVal
      }
      return true;
    },
    rule(serverVal, setVal) {
      if (typeof setVal !== 'undefined'){
        return serverVal.name === setVal
      }
      return true;
    },
    exclude_attributes(){
      return true;
    }
  },
  set.props.sort('$sort'),
  set.props.offsetLimit('$skip', '$limit'),

);

Executions.List = DefineList.extend({
  '#': Executions
});

Executions.connection = lightConnection({
  url: `${env.ST2_API_ROOT}/api/v1/executions`,
  Map: Executions,
  List: Executions.List,
  name: 'executions',
  algebra
});

Executions.getFilters = function(opts){
  return ajax({
    'url': `${env.ST2_API_ROOT}/api/v1/executions/views/filters`,
    'type': 'GET',
    'data': opts
  }).then(filters => new ExecutionFilters(filters))
}

export default Executions;

export { ExecutionFilters };
