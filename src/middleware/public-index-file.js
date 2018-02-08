const path = require('path');
const env = require('../../shared/env');
const { routeConfig, REG_PARAM_CURLY } = require('../../shared/routes');
const ssoLoginRedirect = require('./sso/login-redirect');
const indexFile = path.join(process.cwd(), `./public/${(env.IS_PROD_UI) ? 'index.production.html' : 'index.development.html'}`);

// Render the index page for defined routes
module.exports = function() {
  const app = this;
  const loginRedirect = ssoLoginRedirect(app.get('sso'));

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
