import feathersClient from '@public/feathers-client';
import env from '@root/shared/env';

/**
 * This model is different from others in that it isn't really a "RESTful"
 * object, but rather just a map of values. There is no creating,
 * updating, or deleting anything, and data does not even have an ID.
 * This is simply a dictionary loaded from an external source. As such
 * we keep a singleton reference and return it whenever data is fetched.
 */
const SINGLETON = {
  'status': 'any',
  'trigger_type': 'any',
  'runner': 'any',
  'rule': 'any',
  'trigger': 'any',
  'user': 'any',
  'action': 'any',
  'execution_type': 'any',
};

const url = `/${env.API_BASE_URI}/execution-filters`;
const service = feathersClient.service(url);

service.hooks({
  after: {
    find: [(hook) => {
      if(hook.result.data) hook.result = hook.result.data[0];
      Object.keys(SINGLETON).forEach(key => {
        if (hook.result[key]) {
          SINGLETON[key] = hook.result[key];
        }
      });
      hook.result = SINGLETON;
      return hook;
    }]
  }
});
export default service;
