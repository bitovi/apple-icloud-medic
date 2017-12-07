import DefineMap from 'can-define/map/';
import sessionConnection from '@public/connections/session';
import feathersClient from '@public/feathers-client';
import User from './user';

const Session = DefineMap.extend('Session', {
  seal: false
},{
  // The JWT payload is extracted onto the session instance.
  iat: 'any',
  aud: 'any',
  iss: 'any',
  sub: 'any',
  exp: 'any',
  userId: 'string',

  user: {
    Type: User,
    // Automatically populate the user data when a userId is received.
    get (lastSetVal, setVal) {
      if (lastSetVal) {
        return lastSetVal;
      }
      console.log('session.user.get', lastSetVal, 'userId:::', this.userId);
      this.getUser().then(result => {
        console.log('Got User', result, 'userId:::', this.userId);
        setVal(result)
      });
    }
  },
  getUser: function (userId) {
    if (!this.userId) {
      // throw new Error('Invalid session: no user ID available');
      console.log('session.getUser with no ID');
    }
    return User.get({ [User.connection.idProp]: this.userId || 'me' });
  }
});

Session.connection = sessionConnection({
  feathersClient: feathersClient,
  idProp: 'exp',
  Map: Session,
  name: 'session'
});

export default Session;
