import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/list';
import feathersClient from '@public/feathers-client';
import feathersConnection from '@public/connections/feathers';
import ajax from 'can-ajax';
import env from '@root/shared/env';
import makeAlgebra from './algebras/feathers';

const url = `${env.API_BASE_URI}/user-executions`;

const UserExecutions = DefineMap.extend({
  /* STATIC */
  approval(userExecution, type) {
    ajax({
      type: 'POST',
      url: `${url}/${userExecution.id}/approval`,
      data: {
        approval_type: type,
        execution_id: userExecution.executionId
      }
    });
  }
}, {
  /* PROTOTYPE */
  id: "number",
  executionId: "string",
  userId: "string",
  groupIds: {
    value: () => []
  }
});

UserExecutions.List = DefineList.extend({
  '#': UserExecutions
});

const algebra = makeAlgebra({
  status(serverVal, setVal) {
    // TODO: implement an operator processor for common operators ($or, $and, $contains, $eq, $ne, etc)
    if (typeof setVal !== 'string') {
      if (setVal.$ne) {
        return serverVal !== setVal.$ne;
      }
    }
    return serverVal === setVal;
  }
});

UserExecutions.connection = feathersConnection({
  url,
  Map: UserExecutions,
  List: UserExecutions.List,
  name: 'executions',
  algebra,
  feathersService: feathersClient.service(url)
});

export default UserExecutions;
