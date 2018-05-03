'use strict';

const { DataTypes } = require('sequelize');
const app = require('../../src/app');
const sequelize = app.get('sequelizeClient');
const queryInterface = sequelize.getQueryInterface();
const { withCommonFields } = require('../util');

const TABLE = 'team-members';

exports.up = function(db) {
  return queryInterface.showAllTables().then(tables => {
    if (tables.indexOf(TABLE) === -1) {
      return queryInterface.createTable('team-members', withCommonFields({
        teamId: {
          type: DataTypes.INTEGER,
          references: {
            model: 'teams',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        personId: {
          type: DataTypes.BIGINT,
          allowNull: false
        },
        permissions: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: 'ro-user'
        }
      }));
    }
  });
};

exports.down = function(db) {
  return queryInterface.showAllTables().then(tables => {
    if (tables.indexOf(TABLE) > -1) {
      return queryInterface.dropTable('team-members');
    }
  });
};

exports._meta = {
  "version": 1
};
