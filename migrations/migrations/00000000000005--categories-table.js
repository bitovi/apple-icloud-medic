'use strict';

const { DataTypes } = require('sequelize');
const app = require('../../src/app');
const sequelize = app.get('sequelizeClient');
const queryInterface = sequelize.getQueryInterface();
const { withCommonFields } = require('../util');

exports.up = function(db) {
  return queryInterface.createTable('categories', withCommonFields({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })).then(() => sequelize.close());
};

exports.down = function(db) {
  return queryInterface.dropTable('categories').then(() => sequelize.close());
};

exports._meta = {
  "version": 1
};
