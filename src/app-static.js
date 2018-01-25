const path = require('path');
const feathers = require('feathers');
const favicon = require('serve-favicon');
const env = require('../shared/env');
const { routeConfig, REG_PARAM_CURLY } = require('../shared/routes');
const ssoLoginRedirect = require('./middleware/sso/login-redirect');

const indexFile = path.join(__dirname, `../public/${(env.IS_PROD_UI) ? 'index.production.html' : 'index.html'}`);

module.exports = function() {
  const app = this;
  const publicPath = app.get('public');
  const loginRedirect = ssoLoginRedirect(app.get('sso'));

  // Host the public folder
  app.use(favicon(path.join(publicPath, 'favicon.ico')));
  app.use('/shared', feathers.static('shared'));
  app.use('/stealjs', feathers.static('stealjs'));
  // todo: should not need public route, but steal uses it (see package "main")
  app.use('/public', feathers.static('public'));
  app.use('/img', feathers.static('img'));
  app.use('/node_modules', feathers.static('node_modules'));
  app.use('/package.json', feathers.static('package.json'));
  app.use(feathers.static(publicPath));

  // Render the index page for defined routes
  routeConfig.forEach(config => {
    // convert can-route style `{params}` to express style `:params`
    config.route = config.route.replace(REG_PARAM_CURLY, ':$1');
    app.use('^' + config.route + '$', (req, res) => {
      const sendIndex = () => res.sendFile(indexFile);
      if (env.IS_REMOTE) {
        loginRedirect(req, res, sendIndex);
        return;
      }
      sendIndex();
    });
  });
};
