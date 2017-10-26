import fixture from 'can-fixture';
import env from 'medic/shared/env';
import data_filters from './data/execution-filters';

export default fixture({
  method: "GET",
  url: `${env.API_BASE_URI}/execution-filters`
},(request, response, requestHeaders, ajaxSettings) => {
  let dataOut = {};
  for(var k in data_filters){
    if(request.data.types.indexOf(k) >= 0){
      dataOut[k] = data_filters[k];
    }
  }
  return dataOut
});

