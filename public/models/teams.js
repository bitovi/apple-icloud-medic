import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/list';
import feathersClient from '@public/feathers-client';
import feathersConnection from '@public/connections/feathers';
import { withCommonFields } from '@public/util/model-helper';
import env from '@root/shared/env';
import makeAlgebra from './algebras/feathers';

const url = `${env.API_BASE_URI}/teams`;

const Teams = DefineMap.extend('Teams', withCommonFields({
  name: 'string',
  codeName: 'string',
  groupId: 'number'
}));

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
