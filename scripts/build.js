const path = require('path');
const rimraf = require('rimraf');
const ncp = require('ncp');
const stealTools = require('steal-tools');

// promisify rimraf
const pRimraf = (targ) => new Promise((resolve, reject) => {
  rimraf(targ, (err) => {
    if (err) return reject(new Error(err));
    resolve();
  });
});

// promisify ncp
const pNcp = (from, to) => new Promise((resolve, reject) => {
  ncp(from, to, (err) => {
    if (err) return reject(new Error(err));
    resolve();
  });
});

// build to the default destination and then copy to public
// see: https://github.com/stealjs/steal-tools/issues/882
const defaultDest = path.resolve(__dirname, '../dist');
const targetDest = path.resolve(__dirname, '../public/dist');

pRimraf(targetDest)
.then(() => stealTools.build({
  config: path.resolve(__dirname, '../package.json!npm'),
}, {
  bundleAssets: true,
  bundleSteal: true,
  minify: false,
  envify: true
}))
.then(() => pNcp(defaultDest, targetDest))
.then(() => pRimraf(defaultDest))
.catch(err => { throw err });
