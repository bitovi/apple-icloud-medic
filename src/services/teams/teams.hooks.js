
const loadTeamMembers = (hook) => {
  const groupId = hook.result.groupId;
  const teamMembersSvc = hook.app.service('team-members');
  return teamMembersSvc.find({ query: { groupId } }).then(results => {
    hook.result.members = results;
    return hook;
  });
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
    find: [],
    get: [loadTeamMembers],
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
