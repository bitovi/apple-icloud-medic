'use strict';

const app = require('../../src/app');
const sequelize = app.get('sequelizeClient');
const queryInterface = sequelize.getQueryInterface();

const TABLE = 'rules';

exports.up = function(db) {
  return queryInterface.describeTable(TABLE).then(attributes => {
    if (attributes.title) {
      return queryInterface.renameColumn(TABLE, 'title', 'name');
    }
  });
};

exports.down = function(db) {
  return queryInterface.describeTable(TABLE).then(attributes => {
    if (attributes.name) {
      return queryInterface.renameColumn(TABLE, 'name', 'title');
    }
  });
};

exports._meta = {
  "version": 1
};
