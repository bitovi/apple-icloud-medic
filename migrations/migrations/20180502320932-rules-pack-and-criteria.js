'use strict';

const { DataTypes } = require('sequelize');
const app = require('../../src/app');
const sequelize = app.get('sequelizeClient');
const queryInterface = sequelize.getQueryInterface();

const TABLE = 'rules';

exports.up = function(db) {
  return queryInterface.describeTable(TABLE).then(attributes => {
    const promises = [];
    if (!attributes.pack) {
      // 1. Add the new column, allowing null values
      promises.push(queryInterface.addColumn(TABLE, 'pack', {
        type: DataTypes.STRING
      }).then(() => {
        // 2. insert team name as the value
        return sequelize.query(`UPDATE "rules" SET "pack" = "teams"."codeName"
          FROM "teams"
            JOIN "projects" ON "teams"."id" = "projects"."teamId"
          WHERE "projects"."id" = "rules"."projectId";`);
      }).then(() => {
        // 3. Add null constraint
        return queryInterface.changeColumn(TABLE, 'pack', {
          type: DataTypes.STRING,
          allowNull: false
        })
      }));
    }
    if (!attributes.criteria) {
      promises.push(queryInterface.addColumn(TABLE, 'criteria', {
        type: DataTypes.JSON
      }));
    }
    return Promise.all(promises);
  });
};

exports.down = function(db) {
  return queryInterface.describeTable(TABLE).then(attributes => {
    const promises = [];
    if (attributes.pack) {
      promises.push(queryInterface.removeColumn(TABLE, 'pack'));
    }
    if (attributes.criteria) {
      promises.push(queryInterface.removeColumn(TABLE, 'criteria'));
    }
    return Promise.all(promises);
  });
};

exports._meta = {
  "version": 1
};
