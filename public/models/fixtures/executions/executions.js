import fixture from 'can-fixture';
import env from 'medic/shared/env';
import Executions from 'medic/public/models/executions';
import executionFailedTemplate from './data/get-execution-failed';
import executionSucceededTemplate from './data/get-execution-succeeded';
import clone from 'medic/public/util/clone';

// Clone the template item
export function mock(num){
  var ret = [],
      item;
  for(var i = 0; i < num; i++){
    if(i % 3 === 0){
      item = clone(executionFailedTemplate);
    }else{
      item = clone(executionSucceededTemplate);
    }

    //modify item details
    item.id = i;

    ret.push(item)
  }
  return ret;
}


// Filter the list data based on request (with limit/offset)
//TODO: we shouldn't have to do this
//  why isn't the store filtering data for us?
function filterListData(requestData, list){

  list = list.filter(item => {
    let ret = true;

    //status
    if(typeof requestData.status !== 'undefined'){
      ret = ret && item.status === requestData.status
    }

    // runner
    if(typeof requestData['runner'] !== 'undefined'){
      ret = ret && item.runner.name === requestData['runner']
    }

    // user
    if(typeof requestData['user'] !== 'undefined'){
      ret = ret && item.context.user === requestData['user']
    }

    // action
    if(typeof requestData['action'] !== 'undefined'){
      ret = ret && item.action.ref === requestData['action']
    }

    // trigger_type
    if(typeof requestData['trigger_type'] !== 'undefined'){
      ret = ret && item.trigger_type && item.trigger_type.name === requestData['trigger_type']
    }

    // rule
    if(typeof requestData['rule'] !== 'undefined'){
      ret = ret && item.rule && item.rule.name === requestData['rule']
    }


    return ret;
  })

  //limit/offset
  if(typeof requestData['$skip'] !== 'undefined' && typeof requestData['$limit'] !== 'undefined'){
    let start = parseInt(requestData['$skip'], 10),
        end = start + parseInt(requestData['$limit'], 10);
    list = list.slice(start, end)
  }

  return list;
}

const store = fixture.store(mock(100), Executions.connection.algebra);

//list
fixture(`${env.ST2_API_ROOT}/api/v1/executions`,(request, response, requestHeaders, ajaxSettings)=>{
  switch(request.type.toUpperCase()){
    case "GET":
      // findAll
      store.getListData(request.data, (getListResponse) => {

        //TODO: we shouldn't have to do this
        //  why isn't the store filtering data for us?
        getListResponse.data = filterListData(request.data, getListResponse.data);

        getListResponse.count = getListResponse.data.length;
        response(getListResponse);
      });
      break;
  }
})

//id
fixture(`${env.ST2_API_ROOT}/api/v1/executions/{id}`,(request, response, requestHeaders, ajaxSettings)=>{
  switch(request.type.toUpperCase()){
    case "GET":
      console.log("executions/id fixture GET", request)
      if(request.data.id){
        store.getData(request, response);
        break;
      }
      break;
  }
})

export default store;
