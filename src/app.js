const path = require('path');
const compress = require('compression');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const winston = require('winston');
const logger = require('feathers-logger');

const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const socketio = require('feathers-socketio');

const handler = require('feathers-errors/handler');
const notFound = require('feathers-errors/not-found');

const static = require('./app-static');
const services = require('./services');
const appHooks = require('./app.hooks');

const healthCheck = require('./middleware/health-check');
// const authentication = require('./authentication');

const app = feathers();

// Load app configuration
app.configure(configuration());

// Enable CORS, security, compression, cookie/body parsing, logging
app.use(cors());
app.use(helmet());
app.use(compress());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.configure(logger(winston));

// Set up static file server
app.configure(static);
app.use('/__health', healthCheck());
app.use('/__stats', healthCheck());

// Set up Plugins and providers
app.configure(hooks());
app.configure(rest());
app.configure(socketio());

// Set up authentication strategies
// app.configure(authentication);
// Set up our services (see `services/index.js`)
app.configure(services);

// Configure a middleware for 404s and the error handler
app.use(notFound());
app.use(handler({
  html: {
    401: path.resolve(app.get('public'), 'error-pages/401.html'),
    404: path.resolve(app.get('public'), 'error-pages/404.html')
  }
}));

app.hooks(appHooks);

module.exports = app;
