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
  //session保存方式
  config.sessionRedis = {
    name: 'session' // specific `session` as the session store 
  };
  //数据库
  config.mongoose = {
      url: 'mongodb://127.0.0.1/egg',
      options: {}
  };
  //中间件
  config.middleware=[
    'saveSession'
    ,'auth'
    // ,'errorHandler'
   ];
   //安全机制 线上启用
  //  config.security = {
  //   csp: {
  //     ignore: '/api/logout',
  //     xframe: {
  //     }
  //   },
  //   csrf: {
  //      ignore: '/api/logout'
  //   }
  // };
  // 只对 /api 前缀的 url 路径生效
  // config.errorHandler= {
  //   match: '/api',
  // };
  config.saveSession = {
      match:'/api/lgoin'
  };
  config.auth = {
     match:'/api/books'
  }
  return config;
};
