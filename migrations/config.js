const env = process.env.NODE_ENV || 'development';
const app = require('../src/app');
/**
 * NOTE: If DATABASE_URL is set, this config is ignored!
 *
 * NOTE: If the project is using dotenv, then it is loaded
 * automatically!
 *
 * NOTE: If this file contains errors, it fails silently!
 */
const config = {
  defaultEnv: { ENV: "NODE_ENV" },
  [env]: app.get('postgres')
};

module.exports = config;
