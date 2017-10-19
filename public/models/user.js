import DefineMap from 'can-define/map/';

import algebra from './algebras/feathers';
import feathersClient from '../feathers-client';
import feathersConnection from '../connections/feathers';

const User = DefineMap.extend({
  isSuperAdmin: { value: false },
  displayName: 'string',
  firstName: 'string',
  lastName: 'string',
  nickName: 'string',
  email: 'string',
  groups: {
    value: []
  }
});

User.connection = feathersConnection({
  Map: User,
  name: 'user',
  idProp: 'email',
  algebra,
  feathersService: feathersClient.service('/users')
});

export default User;
