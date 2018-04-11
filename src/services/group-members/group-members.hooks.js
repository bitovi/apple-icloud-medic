
const getGroupId = hook => {
  if (!hook.params.query.groupId) {
    if (hook.params.query.teamId) {
      const TeamModel = hook.app.get('sequelizeClient').models.teams;
      return TeamModel.findById(hook.params.query.teamId).then(team => {
        hook.params.query.groupId = team.groupId;
        return hook;
      });
    }
    throw new Error('You must provide a groupId or teamId to the group-members service');
  }
  return hook;
};

module.exports = {
  before: {
    all: [],
    find: [getGroupId],
    get: [],
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
