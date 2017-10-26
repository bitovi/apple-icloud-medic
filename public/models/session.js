import DefineMap from 'can-define/map/';
import sessionConnection from '../connections/session';
import feathersClient from '../feathers-client';
import User from './user';

const Session = DefineMap.extend('Session', {
  iat: 'any',
  aud: 'any',
  iss: 'any',
  sub: 'any',
  exp: 'any',
  userId: 'string',
  user: {
    Type: User,
    // Automatically populate the user data when a userId is received.
    get (lastSetVal) {
      if (lastSetVal) {
        return lastSetVal;
      }
      this.getUser();
      return null;
    }
  },
  getUser: function (userId) {
    if (!this.userId) {
      throw new Error('Invalid session: no user ID available');
    }
    return User.get({ [User.connection.idProp]: this.userId }).then(user => this.user = user);
  }
});

Session.connection = sessionConnection( {
  // Pass the feathers client as the `feathersClient` property.
  feathersClient: feathersClient,
  idProp: 'exp',
  Map: Session,
  name: 'session'
});

export default Session;
