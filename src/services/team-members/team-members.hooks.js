
const parseResponse = hook => {
  const result = hook.result.groupMember.map(member => {
    return {
      firstName: member.personMember.firstName,
      lastName:  member.personMember.lastName,
      nickName: member.personMember.nickName,
      userId:  member.personMember.emailAddress,
      permissions: '',
      teamId: hook.params.query.teamId
    };
  });
  hook.result = result;
  return hook;
};

const getGroupId = hook => {
  if (!hook.params.query.groupId) {
    if (hook.params.query.teamId) {
      const TeamModel = hook.app.get('sequelizeClient').models.teams;
      return TeamModel.findById(hook.params.query.teamId).then(team => {
        hook.params.query.groupId = team.groupId;
        return hook;
      });
    }
    throw new Error('You must provide a groupId or teamId to the team-members service');
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
    find: [parseResponse],
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
