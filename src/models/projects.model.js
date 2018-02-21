// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const ModelHelper = require('../util/model-helper');
const itemCat = require('./item-categories.model');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  /**
   * Defines Project model.
   *
   * @class Projects
   */
  const projects = sequelizeClient.define('projects', {
    /**
     * The title fo the project.
     * @type {String}
     * @memberof Projects#
     */
    title: {
      type: DataTypes.STRING,
    },
    /**
     * The project description
     * @type {String}
     * @memberof Projects#
     */
    description: {
      type: DataTypes.TEXT,
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });
  /**
   *  Defines the relationships between projects and other entities.
   * @memberof Projects
   */
  projects.associate = function (models) {
    ModelHelper
      .subject(this, models)
      .isChildOf(models.teams)
      .containsManyFrom(models.rules)
      .containsManyFrom(models['project-contributors'], { as: 'contributors' })
      .hasCategories();
  };

  itemCat(app);
  return projects;
};
