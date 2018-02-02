import makeDebug from 'debug';
import fixtureSocket from 'can-fixture-socket';
import io from 'socket.io-client';

// The mock server must be created before any models (connections) are created!
const mockServer = new fixtureSocket.Server(io);
const debug = makeDebug('medic:socket:connection');

debug('Mock socket server starting...\n\t ===> This must happen before the Feathers Client socket!');
mockServer.on('connection', () => {
  debug('Mock socket server connected!');
});

export default mockServer;
