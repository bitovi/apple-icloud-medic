const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const jsdoc2md = require('jsdoc-to-markdown');

const USE_CACHE = true; // set to false while testing this script
const PUBLIC_SOURCE = path.resolve(__dirname, '../public/**/!(*test|*story).js');
const SERVER_SOURCE = path.resolve(__dirname, '../src/**/!(*test|*story).js');
const TARGET = path.resolve(__dirname, '../docs/jsdocs');

// config for jsdoc
const configure = path.resolve(__dirname, './jsdoc.json');

console.log('Running JSDOC. If this is the first time you\'ve run this, it could take some time.');
const data = jsdoc2md.getTemplateDataSync({
  configure,
  files: [PUBLIC_SOURCE, SERVER_SOURCE],
  'no-cache': !USE_CACHE
});

// "data" is an array of definitions (identifiers). A single file can
// have many definitions, so we group them by file path.
const modules = data.reduce((dict, identifier) => {
  const key = path.join(identifier.meta.path, path.basename(identifier.meta.filename, '.js'));
  if (!dict[key]) {
    dict[key] = [];
  }
  dict[key].push(identifier);
  return dict;
}, {});

// Delete any existing jsdocs
if (fs.existsSync(TARGET)) {
  rimraf.sync(TARGET);
}

// For each module, render a markdown file with all of its definitions.
// The generated markdown file structure will match the source file structure.
Object.keys(modules).forEach(modulePath => {
  const scope = modulePath.split('medic/')[1];
  const data = modules[modulePath];
  const output = jsdoc2md.renderSync({ data });
  const target = path.resolve(TARGET, `${scope}.md`);
  mkdirp.sync(path.dirname(target));
  fs.writeFileSync(target, output);
});

console.log('JSDOC task complete!');
