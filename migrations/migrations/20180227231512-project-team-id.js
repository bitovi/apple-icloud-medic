'use strict';

const { DataTypes } = require('sequelize');
const app = require('../../src/app');
const sequelize = app.get('sequelizeClient');
const queryInterface = sequelize.getQueryInterface();

exports.up = function(db) {
  return queryInterface.describeTable('projects').then(attributes => {
    if ( !attributes.teamId ) {
      return queryInterface.addColumn('projects', 'teamId', {
        type: DataTypes.INTEGER,
        references: {
          model: 'teams',
          key: 'id'
        },
        onDelete: 'CASCADE'
      });
    }
  });
};

exports.down = function(db) {
  return queryInterface.describeTable('projects').then(attributes => {
    if ( attributes.teamId ) {
      return queryInterface.removeColumn('projects', 'teamId');
    }
  });
};

exports._meta = {
  "version": 1
};
