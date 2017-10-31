const rimraf = require('rimraf');
const ncp = require('ncp');
const stealTools = require('steal-tools');

const defaultDest = __dirname + '/dist';
const targetDest = __dirname + '/public/dist';

rimraf(targetDest, (err) => {
  if (err) throw new Error(err);

  stealTools.build({
    config: __dirname + '/package.json!npm',
  }, {
    dest: defaultDest,
    bundleAssets: true,
    bundleSteal: true,
    minify: true
  }).then(() => {
    // we copy manually because of this: https://github.com/stealjs/steal-tools/issues/882
    ncp(defaultDest, targetDest, (err) => {
      if (err) throw new Error(err);
    });
  });
});
