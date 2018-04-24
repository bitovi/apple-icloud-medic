const formatData = hook => {
  if(hook.params.query.$format){
    const result = hook.result.map(execution => {
      const props = ['id', 'rule', 'status', 'action', 'start_timestamp', 'end_timestamp', 'children', 'liveaction', 'parent'];

      const pick = (ac, prop) => (ac[prop] = execution[prop], ac);

      const pluckedExecution = props.reduce(pick, {});

      pluckedExecution.rawData = execution;

      return pluckedExecution;
    });
    hook.result = result;
  }
  return hook;
};

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [formatData],
    get: [],
    create: [],
    update: [],
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
