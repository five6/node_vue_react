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
                database: 'egg',
            },
            dbProd:{
                host: 'localhost',
                port: '3306',
                user: 'root',
                password: 'root',
                database: 'egg',
            }
        },
        app: true,
        agent: false,
    };
    config.redis = {
      app: true,
      agent: false,
        clients:{
            session:{
                host: '127.0.0.1',
                port: 6379,
                password: '',
                db: '0',
            },
            dev:{
                host: '127.0.0.1',
                port: 6379,
                password: '',
                db: '0',
            },
            prod:{
                host: '127.0.0.1',
                port: 6379,
                password: '',
                db: '0',
            }
        }
  };
  config.sessionRedis = {
    name: 'session' // specific `session` as the session store 
};
  config.mongoose = {
      url: 'mongodb://127.0.0.1/egg',
      options: {}
  };
  config.middleware=[
    'saveSession',
    'errorHandler'
   ];
  // 只对 /api 前缀的 url 路径生效
  config.errorHandler= {
    match: '/api',
  };
  config.saveSession = {
      match:'/api/user/lgoin'
  };
  return config;
};
