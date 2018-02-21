// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;


module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  /**
   * Categories Model is used for categories and tags associated with other models.
   * @see Item-Categories model for association.
   * @class Categories
   */
  const categories = sequelizeClient.define('categories', {
    /**
     * @type {String}
     * @memberof Categories#
     */
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  return categories;
};
