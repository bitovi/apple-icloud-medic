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
  userId: 'number',

  user: {
    Type: User,
    // Automatically populate the user data when a personId is received.
    get (lastSetVal, setVal) {
      if (lastSetVal || !this.userId) {
        return lastSetVal;
      }
      debug('session.user.get - Loading user', this.userId);
      this.userPromise.then(result => {
        debug('session.user.get - GOT USER', result.serialize(), 'userId:::', this.userId);
        setVal(result);
      });
    }
  },
  userPromise: {
    get() {
      debug('session.userPromise', USER_ID_PROP, ':', this.userId);
      return User.get({ [USER_ID_PROP]: this.userId || 'me' });
    }
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
