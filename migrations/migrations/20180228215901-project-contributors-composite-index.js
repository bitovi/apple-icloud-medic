'use strict';

const { DataTypes } = require('sequelize');
const app = require('../../src/app');
const sequelize = app.get('sequelizeClient');
const queryInterface = sequelize.getQueryInterface();

const TABLE = 'project-contributors';
const CONSTRAINT_NAME = `${TABLE}_projectId_userId_uk`;

module.exports = {
  up: (db) => {
    const fields = ['projectId'];
    return queryInterface.describeTable(TABLE).then(attributes => {
      if (attributes.userId) {
        fields.push('userId');
      } else if (fields.personId) {
        fields.push('personId');
      }
      return queryInterface.addConstraint(TABLE, fields, {
        type: 'unique',
        name: CONSTRAINT_NAME
      }).catch(err => {
        if (err.message.indexOf('already exists') > -1) return;
        throw err;
      });
    });
  },

  down: (db) => {
    return queryInterface
      .removeConstraint(TABLE, CONSTRAINT_NAME)
      .catch(err => {
        if (err.name === 'SequelizeUnknownConstraintError') return;
        throw err;
      });
  }
};
