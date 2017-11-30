const path = require('path');

const ModletResolver = {
  apply(compiler) {
    compiler.plugin('resolve', function(req, callback) {
      // If a project module (which is *not* in the node_modules directory)
      // makes a request for an asset ending in a slash, assume that we are
      // using "modlet" style includes, not node-style "index" includes.
      if (req.request.slice(-1) === '/') {
        if (req.context.issuer.indexOf('node_modules') === -1) {
          var obj = {
            path: req.path,
            request: req.request + path.basename(req.request) + '.js',
            query: req.query,
            directory: req.directory
          };

          this.doResolve('resolve', obj, 'Using modlet style require', callback);
          return;
        }
      }
      callback();
    });
  }
};

module.exports = ModletResolver;
