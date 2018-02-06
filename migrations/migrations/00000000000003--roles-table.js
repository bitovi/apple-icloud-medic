'use strict';

const { DataTypes } = require('sequelize');
const app = require('../../src/app');
const sequelize = app.get('sequelizeClient');
const queryInterface = sequelize.getQueryInterface();
const { withCommonFields } = require('../util');

exports.up = function(db) {
  return queryInterface.createTable('roles', withCommonFields({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dsGroupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    permissions: {
      type: DataTypes.JSON,
      allowNull: false
    }
  })).then(() => sequelize.close());
};

exports.down = function(db) {
  return queryInterface.dropTable('roles').then(() => sequelize.close());
};

exports._meta = {
  "version": 1
};
