import makeDebug from 'debug';
import fixtureSocket from 'can-fixture-socket';
import io from 'socket.io-client';

// The mock server must be created before any models (connections) are created!
const mockServer = new fixtureSocket.Server(io);
const debug = makeDebug('medic:socket:connection');

mockServer.on('connection', () => {
  debug('Mock socket server connected!');
});

export default mockServer;
