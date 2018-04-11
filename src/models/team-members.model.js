// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const ModelHelper = require('../util/model-helper');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  /**
   * Team Members Model
   * @class TeamMembers
   */
  const teamMembers = sequelizeClient.define('team-members', {
    /**
     * The DS personId for the user
     * @type {Number}
     * @memberof TeamMembers#
     */
    personId: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    /**
     * This is permission this user has for this team: 'ro-user', 'rw-user', 'admin'
     * @type {String}
     * @memberof TeamMembers#
     */
    permissions: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'read-only'
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  teamMembers.associate = function (models) {
    ModelHelper
      .subject(this, models)
      .isChildOf(models.teams);
  };

  return teamMembers;
};
