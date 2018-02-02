// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  /**
   * Defines Rule model.
   *
   * @class Rules
   */
  const rules = sequelizeClient.define('rules', {
    /**
     * The title fo the rule.
     * @type {String}
     * @memberof Rules#
     */
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    /**
     * The title fo the rule.
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
    this.Project = this.belongsTo(models.projects);
    this.Tags = this.belongsToMany(models.categories, {
      through: {
        model: models['item-categories'],
        unique: false,
        scope: {
          itemType: 'rules'
        }
      },
      as: 'tags',
      foreignKey: 'itemId',
      constraints: false
    });
  };

  return rules;
};
