// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  /**
   * Defines Roles model.
   *
   * @class Roles
   */
  const roles = sequelizeClient.define('roles', {
    /**
     * The name of the role - for display only
     * @type {String}
     * @memberof Roles#
     */
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    /**
     * The Directory Service group ID
     * @type {Integer}
     * @memberof Roles#
     */
    dsGroupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    /**
     * The permissions object
     * @type {JSON}
     * @memberof Roles#
     */
    permissions: {
      type: DataTypes.JSON,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  return roles;
};
