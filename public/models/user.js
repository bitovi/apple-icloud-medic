import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/list';
import canSet from 'can-set';
import feathersClient from '@public/feathers-client';
import feathersConnection from '@public/connections/feathers';
import env from '@root/shared/env';

const ID_PROP = 'personId';

const algebra = new canSet.Algebra(
  canSet.props.id(ID_PROP)
);

// A user represents a Directory Services user
// with additional metadata attached by Medic
const User = DefineMap.extend({
  // These are fields defined by Medic
  isSuperAdmin: { default: false },
  displayName: 'string',

  // These are fields defined by Directory Services
  [ID_PROP]: 'number',
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
