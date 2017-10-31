const path = require('path');
const feathers = require('feathers');
const favicon = require('serve-favicon');
const env = require('../shared/env');
const ssoLoginRedirect = require('./middleware/sso/login-redirect');
const stealIndexHandler = require('./middleware/steal-index-handler')

const indexFile = path.join(__dirname, `../public/${(env.IS_PROD_UI) ? 'index.production.html' : 'index.html'}`);
const REG_INDEX_ROUTE = /^\/(?:index\.html|executions.*)?$/;

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
  app.use('/node_modules', feathers.static('node_modules')/*, stealIndexHandler*/);
  app.use('/package.json', feathers.static('package.json'));

  // TODO: used shared router config for index.html routes
  app.use('/', (req, res, next) => {
    if (REG_INDEX_ROUTE.test(req.path)) {
      const sendIndex = () => res.sendFile(indexFile);
      if (env.IS_REMOTE) {
        loginRedirect(req, res, sendIndex);
        return;
      }
      sendIndex();
      return;
    }
    next();
  }, feathers.static(publicPath));
};
