// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  /**
   * Defines ProjectContributor model.
   *
   * @class ProjectContributors
   */
  const projectContributors = sequelizeClient.define('project-contributors', {
    /**
     * The userId is the email address of the associated user.
     * @type {String}
     * @memberof ProjectContributors#
     */
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    /**
     * The permissions level granted to the project-contributor.
     * @type {String}
     * @memberof ProjectContributors#
     */
    permissions: {
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
  /**
   *  Defines the relationships between projectContributors and other entities.
   * @memberof ProjectContributors
   */
  projectContributors.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    this.Project = this.belongsTo(models.projects);
  };

  return projectContributors;
};
