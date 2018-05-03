'use strict';

const app = require('../../src/app');
const sequelize = app.get('sequelizeClient');
const queryInterface = sequelize.getQueryInterface();

const TABLE = 'project-contributors';
exports.up = function(db) {
  return queryInterface.describeTable(TABLE).then(attributes => {
    if (attributes.userId) {
      return queryInterface.renameColumn(TABLE, 'userId', 'personId');
    }
  });
};

exports.down = function(db) {
  return queryInterface.describeTable(TABLE).then(attributes => {
    if (attributes.personId) {
      return queryInterface.renameColumn(TABLE, 'personId', 'userId');
    }
  });
};

exports._meta = {
  "version": 1
};
