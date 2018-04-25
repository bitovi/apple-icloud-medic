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
    get (lastVal, setVal) {
      if (this.userPromise) {
        debug('session.user.get - Loading user', this.userId);
        this.userPromise.then(result => {
          debug('session.user.get - GOT USER', result.serialize(), 'userId:::', this.userId);
          setVal(result);
        });
      }
      return lastVal;
    }
  },
  userError: {
    get(lastVal, setVal) {
      if (this.userPromise) {
        this.userPromise.catch(setVal);
      }
      return null;
    }
  },
  userPromise: {
    get() {
      if (this.userId) {
        debug('session.userPromise', USER_ID_PROP, ':', this.userId);
        return User.get({ [USER_ID_PROP]: this.userId || 'me' });
      }
      return null;
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
