import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/list';
import feathersClient from '@public/feathers-client';
import feathersConnection from '@public/connections/feathers';

const User = DefineMap.extend({
  isSuperAdmin: { value: false },
  displayName: 'string',
  firstName: 'string',
  lastName: 'string',
  nickName: 'string',
  emailAddress: 'string',
  allGroups: {
    type: 'any',
    value: () => []
  }
});

User.List = DefineList.extend({
  '#': User
});

User.connection = feathersConnection({
  Map: User,
  List: User.List,
  name: 'user',
  idProp: 'emailAddress',
  feathersService: feathersClient.service('/users')
});

export default User;
