import connect from 'can-connect';
import hub from 'public/models/hub';

const REG_STATUS_REDIRECT = /^30[12]$/;

const errorHandler = e => {
  let message = '';
  if (e.status === 401){
    window.location.pathname = '/401.html';
    return;
  }
  if (REG_STATUS_REDIRECT.test(e.status)) {
    window.location.replace(e.getResponseHeader('Location'));
    return;
  }
  if (e.status === 0) {
    message = 'Could not reach server. Please contact an administrator.'
  } else {
    message = (e.responseJSON && e.responseJSON.message) || e.responseText
  }
  hub.publish('alert', {
    type: 'error',
    title: 'Error',
    message
  });
};

const errorBehavior = connect.behavior('error-handler', baseConnect => {
  const behavior = {};

  ['getData', 'getListData', 'createData', 'updateData', 'destroyData'].forEach(method => {
    behavior[method] = (...args) => {
      const promise = baseConnect[method].apply(baseConnect, args);

      promise.catch(errorHandler);

      return promise;
    };
  });

  return behavior;
});

export default errorBehavior;
export { errorHandler };
