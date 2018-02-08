const ID_FIELD = {
  id: {
    type: 'number'
  }
};

const DATE_FIELDS = {
  createdAt: {
    type: 'date'
  },
  updatedAt: {
    type: 'date'
  }
};

module.exports = {
  ID_FIELD,
  DATE_FIELDS,
  withCommonFields (fields) {
    return Object.assign({}, ID_FIELD, fields, DATE_FIELDS);
  }
};
