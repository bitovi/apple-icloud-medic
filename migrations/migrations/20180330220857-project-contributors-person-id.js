'use strict';

const app = require('../../src/app');
const sequelize = app.get('sequelizeClient');
const queryInterface = sequelize.getQueryInterface();

exports.up = function(db) {
  return queryInterface.renameColumn(
    'project-contributors',
    'userId',
    'personId'
  );
};

exports.down = function(db) {
  return queryInterface.renameColumn(
    'project-contributors',
    'personId',
    'userId'
  );
};

exports._meta = {
  "version": 1
};
