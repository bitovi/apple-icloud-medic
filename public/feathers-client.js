import env from '@root/shared/env';
import feathers from 'feathers-client';
import io from 'socket.io-client/dist/socket.io';
import hooks from 'feathers-hooks';
import auth from 'feathers-authentication-client';

const socket = io({
  reconnectionAttempts: env.IS_ORCHARD ? Infinity : 5,
  reconnectionDelay: 4000
});

const feathersClient = feathers()
  .configure(hooks())
  .configure(feathers.socketio(socket))
  .configure(auth({
    storage: window.localStorage
  }));

export default feathersClient;
