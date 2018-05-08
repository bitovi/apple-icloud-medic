import env from '@root/shared/env';
import feathers from 'feathers-client';
import io from 'socket.io-client';
import hooks from 'feathers-hooks';
import auth from 'feathers-authentication-client';
import makeDebug from 'debug';

const debug = makeDebug('medic:socket:connection');

debug('Feathers Client socket connection starting...');
const socket = io({
  timeout: 8000,
  reconnectionAttempts: env.IS_ORCHARD ? Infinity : 30,
  reconnectionDelay: 4000
});

socket.on('connect', function(){
  debug('Feathers Client socket connected!');
});


const feathersClient = feathers()
  .configure(hooks())
  .configure(feathers.socketio(socket))
  .configure(auth({
    storage: window.localStorage
  }));

export default feathersClient;
