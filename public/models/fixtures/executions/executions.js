import fixture from 'can-fixture';
import env from '@root/shared/env';
import Executions from '@public/models/executions';
import mockServer from '../mock-socket-server';

const STATUS = ['failed', 'succeeded', 'pending'];

function mock(){
  let count = 100; // number of executions
  const arr = [];
  while(count--) {
    arr.push({
      id: 100 + count,
      type: 'workflow',
      actionName: 'icloud3_daily_deployment',
      workflowName: 'icloud3_daily_deployment',
      ruleName: 'icloud3_daily_deployment',
      trigger: 'core.st2.CronTimer',
      project: { name: 'High Impact Project', teamId: 1234 },
      team: { name: 'Medic', codeName: 'Medic-Dev', id: 1234 },
      startTime: new Date(),
      endTime: new Date(),
      duration: '17',
      status: fixture.rand(STATUS, 1)[0],
      children: []
    });
  }
  return arr;
}

const url = `${env.API_BASE_URI}/executions`;
const store = fixture.store(mock(), Executions.connection.algebra);
fixture(url, store);
mockServer.onFeathersService(url, store);

export default store;
