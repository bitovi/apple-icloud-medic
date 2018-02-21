// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const ModelHelper = require('../util/model-helper');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  /**
   * Defines the relationship between items of various types (e.g. Projects) and their categories.
   *
   * @class Item-Categories
   */
  const itemCategories = sequelizeClient.define('item-categories', {
    /**
     * Item id that maps to the item's table.
     * @type {Integer}
     * @memberof Item-Categories#
     */
    itemId:  {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    /**
     * The model name of the item. This allows the item-categories table to store items of varying types.
     * @type {String}
     * @memberof Item-Categories#
     */
    itemType: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false,
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  itemCategories.associate = function (models) {
    ModelHelper
      .subject(this, models)
      .isChildOf(models.categories);
  };

  return itemCategories;
};
