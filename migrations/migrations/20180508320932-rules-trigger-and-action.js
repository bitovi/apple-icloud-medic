'use strict';

const { DataTypes } = require('sequelize');
const app = require('../../src/app');
const sequelize = app.get('sequelizeClient');
const queryInterface = sequelize.getQueryInterface();

const TABLE = 'rules';

exports.up = function(db) {
  return queryInterface.describeTable(TABLE).then(attributes => {
    const promises = [];
    if (!attributes.trigger) {
      // 1. Create the column without null constraint
      promises.push(queryInterface.addColumn(TABLE, 'trigger', {
        type: DataTypes.JSONB
      }).then(() => {
        // 2. insert team name as the value
        return sequelize.query(`UPDATE "rules" SET "trigger" = '{}'`);
      }).then(() => {
        // 3. Add null constraint
        return queryInterface.changeColumn(TABLE, 'trigger', {
          type: DataTypes.JSONB,
          allowNull: false
        });
      }));
    }
    if (!attributes.action) {
      // 1. Create the column without null constraint
      promises.push(queryInterface.addColumn(TABLE, 'action', {
        type: DataTypes.JSONB
      }).then(() => {
        // 2. insert team name as the value
        return sequelize.query(`UPDATE "rules" SET "action" = '{}'`);
      }).then(() => {
        // 3. Add null constraint
        return queryInterface.changeColumn(TABLE, 'action', {
          type: DataTypes.JSONB,
          allowNull: false
        });
      }));
    }
    return Promise.all(promises);
  });
};

exports.down = function(db) {
  return queryInterface.describeTable(TABLE).then(attributes => {
    const promises = [];
    if (attributes.trigger) {
      promises.push(queryInterface.removeColumn(TABLE, 'trigger'));
    }
    if (attributes.action) {
      promises.push(queryInterface.removeColumn(TABLE, 'action'));
    }
    return Promise.all(promises);
  });
};

exports._meta = {
  "version": 1
};
