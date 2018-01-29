// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  /**
   * Teams Model description here!!
   * @class Teams
   */
  const team = sequelizeClient.define('teams', {
    /**
     * @type {String}
     * @memberof Teams#
     */
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    /**
     * A code-friendly representation of the team name. Useful
     * for routing, permissions, etc.
     * @type {String}
     * @memberof Teams#
     */
    codeName: {
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

  team.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return team;
};
