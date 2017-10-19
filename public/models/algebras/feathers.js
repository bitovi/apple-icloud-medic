import canSet from 'can-set';

/*
 * This is the most basic default algebra for feathers-friendly models.
 * Any new algebras should start with this and extend as necessary.
 */
export default new canSet.Algebra(
  canSet.props.sort('$sort'),
  canSet.props.offsetLimit('$skip', '$limit')
);
