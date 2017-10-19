import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import set from 'can-set';
import superMap from 'can-connect/can/super-map/';
import env from 'medic/shared/env';


const Executions = DefineMap.extend({
    seal: false
  }, {
    "status": "string",
    "start_timestamp": "date",
    "end_timestamp": "date",
    "log": [],
    "parameters": {},
    "runner": {},
    "elapsed_seconds": "number",
    "web_url": "string",
    "parent": "string",
    "result": {},
    "context": {},
    "action": {},
    "liveaction": {},
    "id": "string"
});

//TODO: merge algebra with medic/public/models/algebras (or wherever)
const algebra = new set.Algebra(
  set.props.id('id'),
  set.props.sort('$sort'),
  set.props.offsetLimit('$skip', '$limit')
);

Executions.List = DefineList.extend({
  '#': Executions
});

Executions.connection = superMap({
  url: `${env.STACKSTORM_API_ROOT}/api/v1/executions`,
  Map: Executions,
  List: Executions.List,
  name: 'executions',
  algebra
});

export default Executions;
