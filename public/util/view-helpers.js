/**
 * Ensures an array-like object is converted to an actual array.
 * This is useful for passing DefineLists as props where an array
 * is expected or enforced.
 *
 * @param  {Object|Array} list   An array-like object.
 * @return {Array}
 */
const listAsArray = (list) => {
  return [...list];
};

export { listAsArray };
