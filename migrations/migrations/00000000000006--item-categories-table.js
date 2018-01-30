'use strict';

const { DataTypes } = require('sequelize');
const app = require('../../src/app');
const sequelize = app.get('sequelizeClient');
const queryInterface = sequelize.getQueryInterface();
const { ID_FIELD } = require('../util');

exports.up = function(db) {
  return queryInterface.createTable('item-categories', Object.assign({}, ID_FIELD, {
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'categories',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    itemId:  {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    itemType: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })).then(() => sequelize.close());
};

exports.down = function(db) {
  return queryInterface.dropTable('item-categories').then(() => sequelize.close());
};

exports._meta = {
  "version": 1
};
