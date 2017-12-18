const { DataTypes } = require('sequelize');

const ID_FIELD = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
};

const DATE_FIELDS = {
  createdAt: {
    type: DataTypes.DATE
  },
  updatedAt: {
    type: DataTypes.DATE
  },
};

module.exports = {
  ID_FIELD,
  DATE_FIELDS,
  withCommonFields (fields) {
    return Object.assign({}, ID_FIELD, fields, DATE_FIELDS);
  }
};
