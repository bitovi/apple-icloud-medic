import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/list';
import makeDebug from 'debug';
import sessionConnection from '@public/connections/session';
import feathersClient from '@public/feathers-client';
import User from './user';

const debug = makeDebug('medic:session');
const USER_ID_PROP = User.connection.idProp;

const Session = DefineMap.extend('Session', {
  seal: false
},{
  // The JWT payload is extracted onto the session instance.
  iat: 'any',
  aud: 'any',
  iss: 'any',
  sub: 'any',
  exp: 'any',
  [USER_ID_PROP]: 'number',

  user: {
    Type: User,
    // Automatically populate the user data when a personId is received.
    get (lastSetVal, setVal) {
      if (lastSetVal) {
        return lastSetVal;
      }
      debug('session.user.get - Loading user', this[USER_ID_PROP]);
      this.getUserPromise().then(result => {
        debug('session.user.get - GOT USER', result.serialize(), USER_ID_PROP + ':::', this[USER_ID_PROP]);
        setVal(result);
      });
    }
  },
  getUserPromise: function () {
    debug('session.getUserPromise', USER_ID_PROP, ':', this[USER_ID_PROP]);
    return User.get({ [USER_ID_PROP]: this[USER_ID_PROP] || 'me' });
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
