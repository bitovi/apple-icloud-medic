const populateShallow =(hook) => {
  const Project = hook.app.get('sequelizeClient').models.projects;
  hook.params.sequelize = Object.assign({}, hook.params.sequelize, {
    raw: false,
    include: [
      Project.Categories,
      Project.Contributors,
      Project.Rules,
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
      Project.Contributors,
      { model: Rule, include: [Rule.Tags] }
    ]
  });
  return hook;
};

const addDefaultAdminContributor = hook => {
  const contributor = {
    userId: hook.params.user.prsId,
    permissions: 'admin'
  };
  hook.data.contributors = [contributor];

  return hook;
};

module.exports = {
  before: {
    all: [],
    find: [populateShallow],
    get: [
      populateDeep
    ],
    create: [
      addDefaultAdminContributor,
      hook => {
        const models = hook.app.get('sequelizeClient').models;
        const Project = models.projects;

        hook.params.sequelize = Object.assign({}, hook.params.sequelize, {
          include: [ Project.Categories, Project.Contributors ],
        });
      }
    ],
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
