const errors = require('feathers-errors');

const requireQueryParams = (params, ...rest) => {
  const _params = [].concat(params, rest);

  return (hook) => {
    const missing = _params.filter(p => !hook.params.query.hasOwnProperty(p));
    if (missing.length) {
      throw new errors.BadRequest('You must provide all required query params. Missing: ' + missing.join(', '));
    }
  };
};

module.exports = requireQueryParams;
