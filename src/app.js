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
const authentication = require('./authentication');
const sequelize = require('./sequelize');

const app = feathers();

// Load app configuration
app.configure(configuration());

if(('' + app.get('authentication').secret).length < 500) {
  throw new Error('You must define an AUTH_SECRET which is at least 500 characters in length! ' + app.get('authentication').secret.length);
}

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
app.use(['/__health', '/__stats'], healthCheck());

// Set up Plugins and providers
app.configure(hooks());
app.configure(sequelize);
app.configure(rest());
app.configure(socketio());

app.configure(authentication);
app.configure(services);

// Configure a middleware for 404s and the error handler
app.use(notFound());
app.use(handler({
  html: {
    401: path.resolve(app.get('public'), 'static/401.html'),
    404: path.resolve(app.get('public'), 'static/404.html')
  }
  /*,
  json: (err, req, res, () => {
    switch(err) {

    }
  })*/
}));

app.hooks(appHooks);

module.exports = app;
