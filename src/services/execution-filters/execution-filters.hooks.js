const env = require('../../../shared/env');

const toCamelCase = str => {
  return str.replace(/_([a-z])/g, function (g) { return g[1].toUpperCase(); });
};

const toTitleCase = str => {
  return str.replace(/(_|^)([^_]?)/g, function(_, prep, letter) {
    return (prep && ' ') + letter.toUpperCase();
  });
};

const formatFilterData = (hook) => {
  const formattedResults = {};

  const filterTypes = Object.keys(hook.result);

  filterTypes.forEach(filter => {
    if (!filter.key && !filter.title && !hook.result[filter].options) {  //doesn't format if already formatted
      formattedResults[filter] = {
        key: toCamelCase(filter),
        title: toTitleCase(filter),
        options: hook.result[filter]
      };
    }
  });

  hook.result = Object.assign({}, hook.result, formattedResults);

  return hook;
};

const decorateWithTeamProjects = hook => {
  if (hook.params.query.teamId) {
    const teamId = hook.params.query.teamId;
    const Project = hook.app.service(`${env.API_BASE_URI}/projects`);
    return Project.find({ query: { teamId } }).then(results => {
      hook.result.projects = Object.assign({}, hook.result.projects, results);
      return hook;
    });
  }
  return hook;
};

const addFilterConstants  = hook => {
  hook.result = Object.assign({}, hook.result, {
    execution_type: {
      key: 'executionType',
      title: 'Execution Types',
      options: ['workflows', /* 'unhandled events' not yet supported */]
    }
  });

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
    find: [decorateWithTeamProjects, addFilterConstants, formatFilterData],
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
