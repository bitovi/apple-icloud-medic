/**
 * @module {Object} semantic-ui/variables
 * @parent semantic/ui
 *
 * This module imports `.variables` (text) files and exports
 * the name/value pairs as a dictionary to be used in JavaScript.
 * What started as a simple @key: value parser slowly evolved
 * into a lightweight LESS parser.
 *
 * NOTES:
 *  - All code comments will be stripped prior to parsing
 *  - The `@` symbol is not included in the exported variable names.
 *  - known color functions are evaluated to the best of our ability
 *      eg: lighten(saturate(#333, 15), 8) => #533c3c
 *  - Complex/computed values are not evaluated
 *  - Externally referenced variables will not be resolved
 *  - `@import` statements will not be executed
 *
 */

import siteVars from './globals/Site/site.variables!systemjs-plugin-text';
import gridVars from './collections/Grid/grid.variables!systemjs-plugin-text';
import cardVars from './views/Card/card.variables!systemjs-plugin-text';
import containerVars from './elements/Container/container.variables!systemjs-plugin-text';
import lessfnResolver from '@public/util/lessfn-resolver';

const files = {
  site: siteVars,
  grid: gridVars,
  card: cardVars,
  container: containerVars
};

const VAR_START = '@';
const REG_VAR = /@[\w\-@]+/g;
const REG_KEY_VAL = /@([^:]+):([^;]+);/g;
const REG_TRIM_VAL = /(^[\s'"]*|[\s'"]*$)/g;
const REG_COMMENT = /\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm; // use backref $1 in replacement


const reduceValues = (dict) => {
  // resolves values such as this:
  // @foo: 'bar';
  // @someVal: 'foo';
  // @@someVal; //-> 'bar'
  const interpolate = (variable) => {
    return variable.split(VAR_START).reverse().reduce((final, p) => {
      let _prop = p ? p + final : final;
      return dict[_prop] || final || '@' + _prop;
    }, '');
  };

  Object.keys(dict).forEach(prop => {
    REG_VAR.lastIndex = -1; // regex is stateful
    if (REG_VAR.test(dict[prop])) {
      const result = dict[prop].replace(REG_VAR, interpolate);
      // If no more variables exist, resolve LESS functions
      if (!REG_VAR.test(result)) {
        dict[prop] = lessfnResolver(result);
        return;
      }
      dict[prop] = result;
    }
  });

  return dict;
};

const vars = {};
Object.keys(files).forEach(type => {
  // remove comments
  const file = files[type].replace(REG_COMMENT, '$1');

  // parse @key: value; pairs
  let matches, localVars = {};
  while((matches = REG_KEY_VAL.exec(file)) !== null) {
    // matches is a trio of full, group1, group2
    localVars[matches[1].trim()] = matches[2].replace(REG_TRIM_VAL, '');
  }

  Object.assign(vars, { [type]: reduceValues(localVars) });
});

export default vars;
