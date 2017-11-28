import DefineMap from 'can-define/map/';
import feathersClient from '@public/feathers-client';
import feathersConnection from '@public/connections/feathers';

const User = DefineMap.extend({
  isSuperAdmin: { value: false },
  displayName: 'string',
  firstName: 'string',
  lastName: 'string',
  nickName: 'string',
  email: 'string',
  allGroups: {
    type: 'any',
    value: () => []
  }
});

User.connection = feathersConnection({
  Map: User,
  name: 'user',
  idProp: 'email',
  feathersService: feathersClient.service('/users')
});

export default User;
