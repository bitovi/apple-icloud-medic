

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [(hook) => {
      const Categories = hook.app.get('sequelizeClient').models.categories;
      //hook.params.sequelize is the sequelize options object that is passed to the sequelize method call
      if (!hook.params.sequelize) hook.params.sequelize = {};
      //include tells sequelize to include the related category data
      hook.params.sequelize.include = [{ model: Categories }];
      return hook;
    }],
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
