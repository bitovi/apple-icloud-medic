'use strict';

const { DataTypes } = require('sequelize');
const app = require('../../src/app');
const sequelize = app.get('sequelizeClient');
const queryInterface = sequelize.getQueryInterface();

const CONSTRAINT_NAME = 'project-contributors_projectId_userId_uk';

module.exports = {
  up: (db) => {
    return queryInterface.addConstraint('project-contributors', ['projectId', 'userId'], {
      type: 'unique',
      name: CONSTRAINT_NAME
    }).catch(err => {
      if (err.message.indexOf('already exists') > -1) return;
      throw err;
    });
  },

  down: (db) => {
    return queryInterface
      .removeConstraint('project-contributors', CONSTRAINT_NAME)
      .catch(err => {
        if (err.name === 'SequelizeUnknownConstraintError') return;
        throw err;
      });
  }
};
