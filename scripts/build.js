const path = require('path');
const stealTools = require('steal-tools');

stealTools.build({
  config: path.resolve(__dirname, '../package.json!npm'),
}, {
  bundleAssets: true,
  bundleSteal: false,
  minify: false,
  envify: true
});
