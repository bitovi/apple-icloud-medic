const path = require('path');
const feathers = require('feathers');
const favicon = require('serve-favicon');
const env = require('../shared/env');
const ssoLoginRedirect = require('./middleware/sso/login-redirect');

const indexFile = path.join(__dirname, `../public/${(env.IS_PROD_UI) ? 'index.production.html' : 'index.html'}`);
const REG_INDEX_ROUTE = /^\/(?:index\.html)?$/;

module.exports = function() {
  const app = this;
  const publicPath = app.get('public');
  const staticMW = feathers.static(publicPath);
  const loginRedirect = ssoLoginRedirect(app.get('sso'));

  // Host the public folder
  app.use(favicon(path.join(publicPath, 'favicon.ico')));
  app.use('/shared', feathers.static('shared'));
  app.use('/public', feathers.static('public'));
  app.use('/img', feathers.static('img'));
  app.use('/node_modules', feathers.static('node_modules'));
  app.use('/package.json', feathers.static('package.json'));
  app.use('/', (req, res, next) => {
    if (REG_INDEX_ROUTE.test(req.path)) {
      const sendIndex = () => res.sendFile(indexFile);
      if (!env.IS_ORCHARD) {
        sendIndex();
        return;
      }
      loginRedirect(req, res, sendIndex);
      return;
    }
    staticMW(req, res, next);
  });
};
