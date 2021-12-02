/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1638348478577_298';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.passportLocal = {
    usernameField: 'username',
    passwordField: 'password',
  };

  /**
   * @see http://mongodb.github.io/node-mongodb-native/2.2/api/Db.html#createCollection
   */
  config.mongoose = {
    url: process.env.EGG_MONGODB_URL || 'mongodb://127.0.0.1:27017/egg_management',
    options: {
      server: { poolSize: 20 },
      reconnectTries: 10,
      reconnectInterval: 500,
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
