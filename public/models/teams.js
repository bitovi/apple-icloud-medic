import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/list';
import feathersClient from '@public/feathers-client';
import feathersConnection from '@public/connections/feathers';
import { withCommonFields } from '@public/util/model-helper';
import env from '@root/shared/env';
import makeAlgebra from './algebras/feathers';
import TeamMembersModel from './team-members/team-members';

const url = `${env.API_BASE_URI}/teams`;

const definitions =  withCommonFields({
  name: 'string',
  codeName: 'string',
  groupId: 'number',
  members: {
    Type: TeamMembersModel.List,
    default: () => []
  }
});
/**
 * Teams model.
 * @module models/teams
 * @class
 * Defines the Teams model and its associated properties
 */
const Teams = DefineMap.extend('Teams', definitions);
// Used by the EditForm component
Teams.definitions = definitions;

/**
 * Teams.List model.
 * @class
 * Defines a collection of Teams
 */
Teams.List = DefineList.extend({
  '#': Teams
});

const algebra = makeAlgebra({});

Teams.connection = feathersConnection({
  url,
  Map: Teams,
  List: Teams.List,
  name: 'teams',
  algebra,
  feathersService: feathersClient.service(url)
});

export default Teams;
