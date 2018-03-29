const IS_NODE = typeof process === 'object' && {}.toString.call(process) === '[object process]';
const env = (IS_NODE ? process.env.NODE_ENV : window.System.env) || 'development';
const IS_TEST = /test$/.test(env);
const IS_PRODUCTION = /production$/.test(env);
const { PAGES } = require('../shared/routes');

console.log('Configuring steal for environment:', env);
const stealConfig = {
  map: {
    // this is needed - don't ask me why
    // please don't change it or remove it
    '@root': '.'
  }
};

if (IS_TEST) {
  stealConfig.main = "public/test";
  stealConfig.map = Object.assign({}, stealConfig.map, {
    "dev-bundle.css": "public/test-bundles/dev-bundle.css"
  });
  // something in sinon dynamically depends on samsam...
  stealConfig.meta = Object.assign({}, stealConfig.meta, {
    "sinon": {
      "deps": ["samsam"]
    }
  });
} else {
  stealConfig.bundle = [];
  Object.keys(PAGES).forEach(page => {
    const moduleId = PAGES[page].replace('@public', 'public');
    stealConfig.bundle.push(moduleId);
  });
}

// The build runs in "development" mode, so for build and
// production modes we want to remap some things.
if (IS_PRODUCTION) {
  stealConfig.map = Object.assign({}, stealConfig.map, {
    "react": "react/umd/react.production.min",
    "react-dom": "react-dom/umd/react-dom.production.min",
    "can-debug": "@empty",
    "can-fixture": "@empty",
    "@public/models/fixtures/fixtures": "@empty",
  });
}

module.exports = { systemConfig: stealConfig };
