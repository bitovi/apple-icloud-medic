// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  /**
   * Defines Contributor model.
   *
   * @class Contributors
   */
  const contributors = sequelizeClient.define('contributors', {
    /**
     * The userId is the email address of the associated user.
     * @type {String}
     * @memberof Contributors#
     */
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    /**
     * The permissions level granted to the contributor.
     * @type {String}
     * @memberof Contributors#
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
   *  Defines the relationships between contributors and other entities.
   * @memberof Contributors
   */
  contributors.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    this.Project = this.belongsTo(models.projects);
  };

  return contributors;
};
