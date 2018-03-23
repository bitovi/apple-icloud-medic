
const env = require('../../../shared/env');

const loadTeamMembers = (hook) => {
  const groupId = hook.result[0] && hook.result[0].groupId;
  const teamMembersSvc = hook.app.service(`${env.API_BASE_URI}/team-members`);
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
