'use strict';

const { DataTypes } = require('sequelize');
const app = require('../../src/app');
const sequelize = app.get('sequelizeClient');
const queryInterface = sequelize.getQueryInterface();
const { withCommonFields } = require('../util');

exports.up = function(db) {
  return queryInterface.createTable('project-contributors', withCommonFields({
    projectId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'projects',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    permissions: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }));
};

exports.down = function(db) {
  return queryInterface.dropTable('project-contributors');
};

exports._meta = {
  "version": 1
};
