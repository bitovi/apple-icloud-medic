import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/list';
import makeDebug from 'debug';
import sessionConnection from '@public/connections/session';
import feathersClient from '@public/feathers-client';
import User from './user';

const debug = makeDebug('medic:session');

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
      debug('session.user.get - Loading user', this.userId);
      this.getUser().then(result => {
        debug('session.user.get - Got User', result, 'userId:::', this.userId);
        setVal(result)
      });
    }
  },
  getUser: function () {
    debug('session.getUser', this.userId);
    return User.get({ [User.connection.idProp]: this.userId || 'me' });
  }
});

Session.List = DefineList.extend({
  '#': Session
});

Session.connection = sessionConnection({
  feathersClient: feathersClient,
  idProp: 'exp',
  Map: Session,
  List: Session.List,
  name: 'session'
});

export default Session;
