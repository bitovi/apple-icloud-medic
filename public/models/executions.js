import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import set from 'can-set';
import feathersClient from '@public/feathers-client';
import feathersConnection from '@public/connections/feathers';
import env from '@root/shared/env';
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

//TODO: merge algebra with medic/public/models/algebras (or wherever)
const algebra = new set.Algebra(
  set.props.id('id'),
  {
    parent(serverVal, setVal) {
      if (('' + setVal) === 'null') {
        return ('' + serverVal) === 'null' || typeof serverVal === 'undefined';
      }
      return true;
    },
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

const url = `/${env.API_BASE_URI}/executions`;

Executions.List = DefineList.extend({
  '#': Executions
});

Executions.connection = feathersConnection({
  url,
  Map: Executions,
  List: Executions.List,
  name: 'executions',
  algebra,
  feathersService: feathersClient.service(url)
});

export default Executions;
