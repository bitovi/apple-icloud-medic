const path = require('path');
const feathers = require('feathers');
const favicon = require('serve-favicon');

module.exports = function() {
  const app = this;
  const publicPath = app.get('public');

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
};
