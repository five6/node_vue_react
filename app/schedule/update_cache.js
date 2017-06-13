'use strict';
module.exports  = app => {
  var config = {};
  config.schedule ={
    type:"all",
    interval:"30m"
  };
  config.task = function* (ctx){ 
      const res = yield ctx.curl('https://cnodejs.org/api/v1/topics', {
        dataType: 'json',
        timeout:1000 * 60 * 10
      });
       ctx.logger.info("执行一次task ： update_cache");
      ctx.app.cache = res.data.data;
  };
  return config;
};