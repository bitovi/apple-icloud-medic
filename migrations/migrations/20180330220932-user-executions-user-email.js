'use strict';

const app = require('../../src/app');
const sequelize = app.get('sequelizeClient');
const queryInterface = sequelize.getQueryInterface();

exports.up = function(db) {
  return queryInterface.renameColumn(
    'user-executions',
    'userId',
    'userEmail'
  );
};

exports.down = function(db) {
  return queryInterface.renameColumn(
    'user-executions',
    'userEmail',
    'userId'
  );
};

exports._meta = {
  "version": 1
};
