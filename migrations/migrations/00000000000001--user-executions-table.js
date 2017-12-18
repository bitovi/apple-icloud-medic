'use strict';

const { DataTypes } = require('sequelize');
const app = require('../../src/app');
const sequelize = app.get('sequelizeClient');
const queryInterface = sequelize.getQueryInterface();
const { withCommonFields } = require('../util');

exports.up = function(db) {
  return queryInterface.createTable('user-executions', withCommonFields({
    executionId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'pending'
    },
    userId: {
      type: DataTypes.STRING
    },
    groupIds: {
      type: DataTypes.ARRAY(DataTypes.INTEGER)
    }
  })).then(() => sequelize.close());
};

exports.down = function(db) {
  return queryInterface.dropTable('user-executions').then(() => sequelize.close());
};

exports._meta = {
  "version": 1
};
