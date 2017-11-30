/**
 * This file should be used to import `.variables` files
 * and export the variables as a dictionary to be used in JavaScript.
 *
 * NOTES:
 *  - All code comments will be stripped prior to parsing
 *  - The `@` symbol is not included in the exported variable names.
 *  - Complex/computed values are not evaluated
 *  - Externally referenced variables will not be resolved
 *  - @import statements will not be executed
 *
 */

import siteVars from './globals/Site/site.variables!systemjs-plugin-text';

const files = [
  siteVars
];

const VAR_START = '@';
const REG_VAR = /^@[\w\-\@]+$/;
const REG_KEY_VAL = /@([^:]+):([^;]+);/g;
const REG_TRIM_VAL = /(^[\s'"]*|[\s'"]*$)/g;
const REG_COMMENT = /\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm; // use backref $1 in replacement

// resolves values such as @@@someVal, @@foo@somVal
function reduceVal(dict, prop) {
  if (REG_VAR.test(dict[prop])) {
    return dict[prop].split(VAR_START).reverse().reduce((final, p) => {
      let _prop = p ? p + final : final;
      return dict[_prop] || final || '@' + prop;
    }, '');
  }
  return dict[prop];
}

const vars = {};
files.forEach(file => {
  file = file.replace(REG_COMMENT, '$1');

  let matches, localVars = {};
  while((matches = REG_KEY_VAL.exec(file)) !== null) {
    // matches is a trio of full, group1, group2
    localVars[matches[1].trim()] = matches[2].replace(REG_TRIM_VAL, '');
  }

  Object.keys(localVars).forEach(prop => {
    localVars[prop] = reduceVal(localVars, prop)
  });

  Object.assign(vars, localVars);
});

console.log(vars);
export default vars;
