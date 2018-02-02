const populateShallow =(hook) => {
  const Project = hook.app.get('sequelizeClient').models.projects;
  hook.params.sequelize = Object.assign({}, hook.params.sequelize, {
    raw: false,
    include: [
      Project.Categories,
      Project.Rules
    ]
  });
  return hook;
};

const populateDeep = (hook) => {
  const models = hook.app.get('sequelizeClient').models;
  const Project = models.projects;
  const Rule = models.rules;
  hook.params.sequelize = Object.assign({}, hook.params.sequelize, {
    raw: false,
    include: [
      Project.Categories,
      { model: Rule, include: [Rule.Tags] }
    ]
  });
  return hook;
};

module.exports = {
  before: {
    all: [],
    find: [populateShallow],
    get: [populateDeep],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
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
