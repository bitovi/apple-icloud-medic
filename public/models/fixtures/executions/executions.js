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
    item = clone(executionSucceededTemplate);

    //modify item details
    item.id = i;

    ret.push(item)
  }
  return ret;
}

const store = fixture.store(mock(100), Executions.connection.algebra);
fixture(`${env.STACKSTORM_API_ROOT}/api/v1/executions`,(request, response, requestHeaders, ajaxSettings)=>{
  // console.log("")
  // console.log("")
  // console.log("")
  // console.log("executions store")
  // console.log("arguments");
  // console.log("request",request);
  // console.log("response",response);
  // console.log("requestHeaders",requestHeaders);
  // console.log("ajaxSettings",ajaxSettings);
  // console.log("store",store)
  // console.log("")
  // console.log("")
  let responseData = {};
  switch(request.type.toUpperCase()){
    case "GET":
      if(request.data.id){
        responseData = store.getData({ "id": request.data.id}, response);
        break;
      }

      // findAll

      // Endpoints are catered to feathers which uses $limit and $skip
      //  we need to translate that to limit & offset for the data store
      // request.data.limit = request.data["$limit"];
      // request.data.offset = request.data["$skip"];
      // delete request.data["$limit"];
      // delete request.data["$skip"];

      responseData = store.getListData(request.data, response);
      console.log("responseData",responseData);
      break;
  }
  return responseData;
})

export default store;
