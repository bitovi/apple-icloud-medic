import fixture from 'can-fixture';
import env from '@root/shared/env';
import Executions from '@public/models/executions';
import clone from '@public/util/clone';
import executionFailedTemplate from './data/get-execution-failed';
import executionSucceededTemplate from './data/get-execution-succeeded';
import mockServer from '../mock-socket-server';

// Clone the template item
function mock(num){
  const ret = [];
  let item;
  for(let i = 0; i < num; i++){
    if(i % 3 === 0){
      item = clone(executionFailedTemplate);
    }else{
      item = clone(executionSucceededTemplate);
    }

    if (Math.random() > 0.8) {
      delete item.parent;
    }

    //modify item details
    item.id = i;

    ret.push(item);
  }
  return ret;
}

const url = `${env.API_BASE_URI}/executions`;
const store = fixture.store(mock(100), Executions.connection.algebra);
fixture(url, store);
mockServer.onFeathersService(url, store);

export default store;
