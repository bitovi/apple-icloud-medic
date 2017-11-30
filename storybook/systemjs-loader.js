const { getOptions } = require('loader-utils');
const escapeRegexp = require('escape-string-regexp');
/**
 * Replaces systemjs-style loader syntax with webpack-style:
 *
 *   ./some-module!systemjs-plugin  ->  webpack-plugin!./some-module
 */
module.exports = function (source) {
  const options = getOptions(this);
  const map = options.loaderMap;
  if (!map) {
    throw new Error('There is no need to use the systemjs loader without providing a `loaderMap`');
  }
  Object.keys(map).forEach(loader => {
    // indexOf should be faster than regex.test
    if (source.indexOf(loader) !== -1) {
      const exp = new RegExp(`(['"])([^!]+)!${escapeRegexp(loader)}['"]`, 'g');
      source = source.replace(exp, `$1${map[loader]}!$2$1`);
    }
  });
  return source;
};
