'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_egg_key_2017000035';
  config.view = {
	  defaultViewEngine: 'nunjucks',
	  mapping: {
	    '.tpl': 'nunjucks',
      '.html': 'nunjucks'
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
    ,'error'
   ];
   //安全机制 线上启用
   config.security = {
    domainWhiteList: ['*'],
    csp: {
      enable: false,
      // ignore: '/api/logout',
    },
    csrf: {
      enable: false,
	    useSession: false,          // if useSession set to true, the secret will keep in session instead of cookie
	    ignoreJSON: false,          // skip check JSON requests if ignoreJSON set to true
	    cookieName: 'csrfToken',    // csrf token's cookie name
	    sessionName: 'csrfToken',   // csrf token's session name
	    headerName: 'x-csrf-token', // request csrf token's name in header
	    bodyName: '_csrf',          // request csrf token's name in body
	    queryName: '_csrf',         // request csrf token's name in query
    }
  };
  config.cors = {
  	allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH' 
  };
  // 只对 /api 前缀的 url 路径生效
  config.error= {
    match: '/api',
  };
  //登录的时候保存session
  config.saveSession = {
      match:'/api/lgoin'
  };
  //如果不在router.js文件里面添加的话，可以在这儿配置
  config.auth = {
     match:'/api/books'
  };
  config.multipart = {
        whitelist: [
            '.png',
            '.jpg',
            '.jpeg', // image/jpeg
            '.png', // image/png, image/x-png
            '.gif', // image/gif
            '.bmp', // image/bmp
            '.wbmp', // image/vnd.wap.wbmp
            '.webp',
            '.tif',
            '.psd',
            '.svg',
    ]
  };
  return config;
};
