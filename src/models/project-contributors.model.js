// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const ModelHelper = require('../util/model-helper');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  /**
   * Defines ProjectContributor model.
   *
   * @class ProjectContributors
   */
  const projectContributors = sequelizeClient.define('project-contributors', {
    /**
     * The DS personId for the user
     * @type {String}
     * @memberof ProjectContributors#
     */
    personId: {
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
    ModelHelper
      .subject(this, models)
      .isChildOf(models.projects)
      .hasComposedIndexWith('projectId', 'personId');
  };

  return projectContributors;
};
