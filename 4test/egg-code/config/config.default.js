/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const writeList = require('./writeList.js')
const oprList = require('./oprList.js')
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    mysql: {
      // 单数据库信息配置
      client: {
        // host
        host: 'localhost',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: 'root',
        // 数据库名
        database: 'vacation',
      },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
    }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1581051574691_585';

  // add your middleware config here
  config.middleware = ['jwt', 'opr'];
  config.jwt = writeList
  config.opr = oprList
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    security: {
      csrf: false
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
