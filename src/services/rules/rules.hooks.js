const populateTags = (hook) => {
  const Rule = hook.app.get('sequelizeClient').models.rules;
  hook.params.sequelize = Object.assign({}, hook.params.sequelize, {
    raw: false,
    include: [ Rule.Tags ]
  });
  return hook;
};

module.exports = {
  before: {
    all: [],
    find: [populateTags],
    get: [populateTags],
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
