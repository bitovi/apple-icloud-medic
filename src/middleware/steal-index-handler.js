const fs = require('fs');
const path = require('path');
const url = require('url');

const REG_JS_EXT = /\.js$/;

module.exports = (req, res, next) => {
  // This is intended to be used *after* the node_modules static handler.
  // This means the static handler did not find the requested file.
  // This most notably happens when steal cannot resolve an "index" module:
  //    import foo from 'foo'
  // Steal first tries to load `foo.js` and then `foo/index.js`
  // Responding with a 204 tells steal to try for the index file while
  // suppressing any 404 errors in the console.
  if (REG_JS_EXT.test(req.path)) {
    const modulePath = path.join(__dirname, '../../node_modules', req.path);
    return fs.stat(modulePath, err => {
      if (err) {
        return fs.stat(modulePath.replace(REG_JS_EXT, '/index.js'), err => {
          if (!err) {
            return res.status(204).send();
          }
          next();
        });
      }
      next();
    })
  }
  next();
};
