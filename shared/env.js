const IS_NODE = typeof process === 'object' && {}.toString.call(process) === '[object process]';
const env = IS_NODE ? process.env.NODE_ENV : window.System.env;

const IS_DEV = env === 'dev';
const IS_UAT = env === 'staging';
const IS_PRODUCTION = env === 'production';
const IS_ORCHARD = IS_DEV || IS_UAT || IS_PRODUCTION;

//Load the UI from public/dist in prod, with steal on orchard-dev
const IS_PROD_UI = (IS_ORCHARD && !IS_DEV) || process.env.FORCE_PROD_UI;

module.exports = {
  // do not put leading or trailing slashes here
  API_BASE_URI: 'medic-api',
  IS_NODE: IS_NODE,
  IS_DEV: IS_DEV,
  IS_UAT: IS_UAT,
  IS_PRODUCTION: IS_PRODUCTION,
  IS_ORCHARD: IS_ORCHARD,
  IS_PROD_UI: IS_PROD_UI,
  SSO_COOKIE: IS_PRODUCTION ? 'myacinfo' : 'myacinfo-uat'
};
