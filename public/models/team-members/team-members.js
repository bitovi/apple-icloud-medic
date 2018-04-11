import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import canSet from 'can-set';
import feathersClient from '@public/feathers-client';
import feathersConnection from '@public/connections/feathers';
import { withCommonFields } from '@public/util/model-helper';
import env from '@root/shared/env';
import UserModel from '../user';

const url = `${env.API_BASE_URI}/team-members`;

/**
 * TeamMembers model.
 * @module models/team-members
 * @class
 * Defines the TeamMembers model and its associated properties
 */
const TeamMembers = DefineMap.extend('TeamMembers', withCommonFields({
  teamId: 'number',
  personId: 'number',
  permissions: 'string',
  // user object loaded dynamically from DS
  user: { Type: UserModel }
}));

/**
 * TeamMembers.List model.
 * @class
 * Defines a collection of TeamMembers associated with a teamId
 */
TeamMembers.List = DefineList.extend('TeamMembers.List', {
  '#': TeamMembers,
  filterByQuery(q) {
    const reg = new RegExp(q, 'i');
    return this.filter(teamMember => {
      const { user } = teamMember;
      return reg.test(user.firstName) ||
      reg.test(user.lastName) ||
      user.nickName && reg.test(user.nickName) ||
      reg.test(user.emailAddress);
    });
  }
});

const algebra = new canSet.Algebra({});

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
