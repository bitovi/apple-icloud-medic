// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

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
  projects.associate = function (models) { // eslint-disable-line no-unused-vars
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    /**
     *  Defines the many-to-many relationship between projects and categories.
     * @memberof Projects#
     */
    projects.belongsToMany(models.categories, {
      through: {
        model: models['item-categories'],
        unique: false,
        scope: {
          itemType: 'projects'
        }
      },
      foreignKey: 'itemId',
      constraints: false
    });

  };

  itemCat(app);
  return projects;
};
