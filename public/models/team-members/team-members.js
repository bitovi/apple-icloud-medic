import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/list';
import feathersClient from '@public/feathers-client';
import feathersConnection from '@public/connections/feathers';
import { withCommonFields } from '@public/util/model-helper';
import env from '@root/shared/env';
import makeAlgebra from '@public/models/algebras/feathers';

const url = `${env.API_BASE_URI}/team-members`;

const definitions = withCommonFields({
  firstName: 'string',
  lastName: 'string',
  nickName: 'string',
  teamId: 'number',
  userId: 'string',
  emailAddress: 'string'
});

/**
 * TeamMembers model.
 * @module models/team-members
 * @class
 * Defines the TeamMembers model and its associated properties
 */
const TeamMembers = DefineMap.extend('TeamMembers', definitions);
TeamMembers.definitions = definitions;

/**
 * TeamMembers.List model.
 * @class
 * Defines a collection of TeamMembers associated with a teamId
 */
TeamMembers.List = DefineList.extend('TeamMembers.List', {
  '#': TeamMembers,
  findTeamMemberByUserId(userId) {
    return this.filter((teamMember) => {
      return teamMember.userId === userId;
    });
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
