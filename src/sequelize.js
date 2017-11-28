const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function () {
  const app = this;
  const connectionString = app.get('postgres');
  const operatorsAliases = {
    $in: Op.in,
    $notIn: Op.notIn,
    $lt: Op.lt,
    $lte: Op.lte,
    $gt: Op.gt,
    $gte: Op.gte,
    $ne: Op.ne,
    $or: Op.or,
    $and: Op.and,
    $overlap: Op.overlap,
    $contains: Op.contains
  };

  const sequelize = new Sequelize(connectionString, {
    dialect: 'postgres',
    logging: console.log,
    operatorsAliases,
    define: {
      freezeTableName: true
    }
  });
  const oldSetup = app.setup;

  app.set('sequelizeClient', sequelize);

  app.setup = function (...args) {
    const result = oldSetup.apply(this, args);

    // Set up data relationships
    const models = sequelize.models;
    Object.keys(models).forEach(name => {
      if ('associate' in models[name]) {
        models[name].associate(models);
      }
    });

    // Do not use sequelize.sync()
    // All db mutations are done through migrations

    return result;
  };
};
