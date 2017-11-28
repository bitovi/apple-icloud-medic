const env = process.env.NODE_ENV || 'development';
const app = require('./src/app');

module.exports = {
  [env] = app.get('postgres')
};
