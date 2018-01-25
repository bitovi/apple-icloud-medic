import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/list';
import feathersClient from '@public/feathers-client';
import feathersConnection from '@public/connections/feathers';
import env from '@root/shared/env';
import makeAlgebra from './algebras/feathers';

const url = `${env.API_BASE_URI}/teams`;

const Teams = DefineMap.extend({
  id: 'number',
  name: 'string',
  codeName: 'string'
});

Teams.List = DefineList.extend({
  '#': Teams
});

const algebra = makeAlgebra({

});

Teams.connection = feathersConnection({
  url,
  Map: Teams,
  List: Teams.List,
  name: 'teams',
  algebra,
  feathersService: feathersClient.service(url)
});

export default Teams;
