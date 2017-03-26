'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1490355041161_6026';
  config.view = {
	  defaultViewEngine: 'nunjucks',
	  mapping: {
	    '.tpl': 'nunjucks',
	  },
  };
  config.mysql = {
        // 单数据库信息配置
        clients:{
            dbTest:{
                host: 'localhost',
                port: '3306',
                user: 'root',
                password: 'root',
                database: 'test',
            },
            dbProd:{
                host: 'localhost',
                port: '3306',
                user: 'root',
                password: 'root',
                database: 'prod',
            }
        },
        app: true,
        agent: false,
    };
  return config;
};
