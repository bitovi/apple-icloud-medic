// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const ModelHelper = require('../util/model-helper');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  /**
   * Defines Rule model.
   *
   * @class Rules
   */
  const rules = sequelizeClient.define('rules', {
    /**
     * The name of the rule.
     * @type {String}
     * @memberof Rules#
     */
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    /**
     * The title of the rule.
     * @type {String}
     * @memberof Rules#
     */
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    /**
     * Whether or not the rule is enabled
     * @type {Boolean}
     * @memberof Rules#
     */
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    /**
     * The name of the pack to which this belongs
     * @type {String}
     * @memberof Rules#
     */
    pack: {
      type: DataTypes.STRING,
      allowNull: false
    },
    /**
     * The optional criteria for the rule
     * @type {Object}
     * @memberof Rules#
     */
    criteria: {
      type: DataTypes.JSON
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  /**
   *  Defines the relationships between rules and other entities.
   * @memberof Projects
   */
  rules.associate = function (models) {
    ModelHelper
      .subject(this, models)
      .isChildOf(models.projects)
      .hasCategories({ as: 'tags' });
  };

  return rules;
};
