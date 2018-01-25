const IS_NODE = typeof process === 'object' && {}.toString.call(process) === '[object process]';
const env = IS_NODE ? process.env.NODE_ENV : window.System.env;
const IS_PRODUCTION = /production$/.test(env);
const { PAGES } = require('../shared/routes');

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

// Configure route pages as bundles
stealConfig.bundle = [];
Object.keys(PAGES).forEach(page => {
  const moduleId = PAGES[page].replace('@public', 'public');
  stealConfig.bundle.push(moduleId);
});

// The build runs in "development" mode, so for build and
// production modes we want to remap some things.
if (IS_PRODUCTION) {
  extend(stealConfig, {
    map: {
      "react": "react/umd/react.production.min",
      "react-dom": "react-dom/umd/react-dom.production.min",
      "can-debug": "@empty",
      "can-fixture": "@empty",
      "@public/models/fixtures/fixtures": "@empty",
    }
  });
}

module.exports = { systemConfig: stealConfig };
