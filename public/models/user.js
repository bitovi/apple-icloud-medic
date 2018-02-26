import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/list';
import canSet from 'can-set';
import feathersClient from '@public/feathers-client';
import feathersConnection from '@public/connections/feathers';
import env from '@root/shared/env';

const ID_PROP = 'emailAddress';

const algebra = new canSet.Algebra(
  canSet.props.id(ID_PROP)
);

const User = DefineMap.extend({
  isSuperAdmin: { default: false },
  displayName: 'string',
  firstName: 'string',
  lastName: 'string',
  nickName: 'string',
  emailAddress: 'string',
  allGroups: {
    type: 'any',
    default: () => []
  }
});

User.List = DefineList.extend({
  '#': User
});

const url = `${env.API_BASE_URI}/users`;

User.connection = feathersConnection({
  url,
  Map: User,
  List: User.List,
  name: 'user',
  idProp: ID_PROP,
  feathersService: feathersClient.service(url),
  algebra
});

export default User;
