import DefineList from 'can-define/list/list';
import feathersClient from '@public/feathers-client';
import feathersConnection from '@public/connections/feathers';
import env from '@root/shared/env';
import makeAlgebra from '@public/models/algebras/feathers';
import UserModel from '../user';

const ID_PROP = UserModel.connection.idProp;

const url = `${env.API_BASE_URI}/team-members`;

/**
 * TeamMembers model.
 * @module models/team-members
 * @class
 * Defines the TeamMembers model and its associated properties
 */
const TeamMembers = UserModel.extend('TeamMembers', {
  groupId: 'number'
});

/**
 * TeamMembers.List model.
 * @class
 * Defines a collection of TeamMembers associated with a teamId
 */
TeamMembers.List = DefineList.extend('TeamMembers.List', {
  '#': TeamMembers,
  findTeamMemberByUserId(id) {
    const result = this.filter(teamMember => teamMember[ID_PROP] === id);
    return result.length ? result[0] : null;
  }
});

const algebra = makeAlgebra({});

/**
 * TeamMembers.connection
 *
 * Defines our relationship between our frontend model and our Feathers service.
 */
TeamMembers.connection = feathersConnection({
  url,
  Map: TeamMembers,
  List: TeamMembers.List,
  name: 'team-members',
  algebra,
  feathersService: feathersClient.service(url)
});

export default TeamMembers;
