const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

const ID_FIELD = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
};

const DATE_FIELDS = {
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP '),
  },
};

module.exports = {
  ID_FIELD,
  DATE_FIELDS,
  withCommonFields (fields) {
    return Object.assign({}, ID_FIELD, fields, DATE_FIELDS);
  }
};
