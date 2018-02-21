'use strict';

const { DataTypes } = require('sequelize');
const app = require('../../src/app');
const sequelize = app.get('sequelizeClient');
const queryInterface = sequelize.getQueryInterface();

exports.up = function(db) {
  return queryInterface.describeTable('teams').then(attributes => {
    if ( !attributes.groupId ) {
      return queryInterface.addColumn('teams', 'groupId', {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      });
    }
  });
};

exports.down = function(db) {
  return queryInterface.describeTable('teams').then(attributes => {
    if ( attributes.groupId ) {
      return queryInterface.removeColumn(
        'teams',
        'groupId'
      );
    }
  });
};

exports._meta = {
  "version": 1
};
