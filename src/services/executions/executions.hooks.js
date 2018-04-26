const dotProp = require('dot-prop');
const flatten = require('flat');
// const canSet = require('can-set');
const { API_BASE_URI } = require('../../../shared/env');
const { reduceDataWithTeamNames } = require('../../util/ss-es-data-helper');

// Applies a series of rules against data and
// prevents certain data from getting through.
// const applyBlackList = (hook) => {
//   const isArray = Array.isArray(hook.data);
//   const data = isArray ? hook.data : [hook.data];
//   const algebra = new canSet.Algebra({});
//   const invalidSets = [
//     { parent: undefined, 'rule.ref': 'default.elastic-data-sync' }
//   ].map(set => flatten.unflatten(set));
//   const result = data.filter(item =>
//     !invalidSets.some(obj => algebra.subset(item, obj))
//   );
//   if (!result.length) {
//     hook.result = [];
//   }
//   hook.data = isArray ? result : result[0];
//   return hook;
// };

const queryMapper = {
  action: 'action.ref',
  rule: 'rule.name',
  runner: 'runner.name',
  trigger_type: 'trigger_type.name',
  user: 'context.user'
};

/**
 * Normalizes the search query. This allows the client to use a shorthand
 * for certain nested values. This is mostly done to achieve parity
 * with the StackStorm executions API.
 */
const normalizeSearchQuery = (hook) => {
  const { query } = hook.params;
  Object.keys(queryMapper).forEach(key => {
    if (typeof query[key] === 'string') {
      dotProp.set(query, queryMapper[key], query[key]);
      if(queryMapper[key].indexOf(key + '.') !== 0) {
        delete query[key];
      }
    }
  });
  // SS uses `parent: null` to match docs which don't have a "parent" field
  if (('' + query.parent) === 'null') {
    query.$missing = ['parent'];
    delete query.parent;
  }
  // SS sorts by start date descending by default
  if (!query.$sort) {
    query.$sort = { start_timestamp: -1 };
  }
  return hook;
};

/**
 * Elastic search will look up nested data like 'some.nested.field': ['value'].
 * "safe: true" will preserve arrays.
 * Arrays will look like this: 'some.nested.field': ['value']
 * (instead of 'some.nested.field.0': 'value')
 */
const flattenQuery = (hook) => {
  const flattened = flatten(hook.params.query, { safe: true }); // preserves arrays
  // unflatten special operator $fields
  Object.keys(flattened).forEach(key => {
    // Ex: $sort.column: -1
    if(key.indexOf('$') === 0 && key.indexOf('.') > 0) {
      dotProp.set(flattened, key, flattened[key]);
      delete flattened[key];
      return;
    }
    // Ex: foo.bar.$startsWith: 'value'
    if(key.indexOf('.$') > 0) {
      const parts = key.split('.$');
      flattened[parts[0]] = dotProp.set({}, '$' + parts[1], flattened[key]);
      delete flattened[key];
      return;
    }
  });
  hook.params.query = flattened;
  return hook;
};

/**
 * Given an execution, returns an flat array of ancestor objects with
 * the top-most (root execution) object first and descending down.
 */
const getAncestors = (execution) => {
  const parents = [];
  let parent = execution.context.parent;
  while(parent) {
    parents.unshift(parent);
    parent = parent.parent;
  }
  return parents;
};

/**
 * Predicate used to determine if an execution belongs to a team.
 */
const belongsToTeam = (execution, REG_TEAMNAME) => {
  const parents = getAncestors(execution);
  // If this is a nested execution, test the pack name of the root execution
  if (parents.length) return REG_TEAMNAME.test(parents[0].pack);
  if (execution.rule) return REG_TEAMNAME.test(execution.rule.ref);
  if (execution.action) return REG_TEAMNAME.test(execution.action.ref);
  return false;
};

/**
 * Assigns a teamName property to each item in the list.
 * This will be used to put the data in the correct index.
 */
const assignTeamName = (prop = 'data') => {
  const cacheName = 'executionsTeamMap';
  return (hook) => {
    let data = dotProp.get(hook, prop);
    const isArray = Array.isArray(data);
    if (!isArray) data = [data];
    if (hook.params.teamName) {
      data.forEach(execution => execution.teamName = hook.params.teamName);
      return hook;
    }
    if (hook.params[cacheName]) {
      data.forEach(execution => execution.teamName = hook.params[cacheName][execution.id]);
      return hook;
    }

    const teamsService = hook.app.service(`${API_BASE_URI}/teams`);
    return reduceDataWithTeamNames(teamsService, data, belongsToTeam).then(results => {
      // create a mapping of id -> teamName for faster operations later
      hook.params[cacheName] = results.reduce((map, execution) => {
        return Object.assign(map, { [execution.id]: execution.teamName });
      }, {});

      // finally, return the correct data
      dotProp.set(hook, prop, isArray ? results : results[0]);
      return hook;
    });
  };
};

/**
 * Expands all of the parent IDs onto a top-level property
 * for quick lookup. The order is intentional and reflects the
 * parent/child relationship: root -> parent -> child. This allows
 * us to look up deeply nested children using any of its ancestor IDs.
 */
const expandParentIds = (hook) => {
  hook.data.forEach(execution => {
    if (execution.parent) {
      execution.parentIds = getAncestors(execution).map(a => a.execution_id);
    }
  });
  return hook;
};

const cacheHelpfulData = (hook) => {
  const { params } = hook;
  if(params.query.$format) {
    params.$format = params.query.$format;
    delete params.query.$format;
  }
  if(params.query.teamName) {
    params.teamName = params.query.teamName;
  }
  return hook;
};

const formatData = hook => {
  if(hook.params.$format){
    hook.result.data = hook.result.data.map(execution => {
      const props = ['id', 'teamName', 'rule', 'status', 'action', 'start_timestamp', 'end_timestamp', 'children', 'liveaction', 'parent'];
      const pick = (ac, prop) => (ac[prop] = execution[prop], ac);
      const pluckedExecution = props.reduce(pick, {});

      pluckedExecution.rawData = execution;
      return pluckedExecution;
    });
  }
};

module.exports = {
  before: {
    all: [],
    find: [normalizeSearchQuery, flattenQuery, cacheHelpfulData],
    get: [],
    create: [/*applyBlackList, */assignTeamName('data'), expandParentIds],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [assignTeamName('result.data'), formatData],
    get: [assignTeamName('result')],
    create: [assignTeamName('result')],
    update: [assignTeamName('result')],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
