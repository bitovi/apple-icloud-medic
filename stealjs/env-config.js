const env = require('../shared/env');

const stealConfig = {};

// Simple extend function - serves the purpose of this module
function extend (dest, src) {
  for (var prop in src) {
    if (typeof src[prop] === "object") {
      dest[prop] = dest[prop] || {};
      return extend(dest[prop], src[prop]);
    } else {
      dest[prop] = src[prop];
    }
  }
  return dest;
};

// The build runs in "development" mode, so for build and
// production modes we want to remap some things.
if (env.IS_BUILD || env.IS_PRODUCTION) {
  extend(stealConfig, {
    map: {
      "react": "react/umd/react.production.min",
      "react-dom": "react-dom/umd/react-dom.production.min",
      "can-fixture": "@empty",
      "@public/models/fixtures/fixtures": "@empty",
    }
  });
}

module.exports = { systemConfig: stealConfig };
