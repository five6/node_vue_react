'use strict';
module.exports  = app => {
  var config = {};
  config.schedule ={
    type:"all",
    interval:"30s"
  };
  config.task = function* (ctx){ 
      const res = yield ctx.curl('https://cnodejs.org/api/v1/topics', {
        dataType: 'json',
      });
        console.log("dddddddddddddddddddddddddddddd");
       ctx.logger.info("执行一次task ： update_cache");
      ctx.app.cache = res.data.data;
  };
  return config;
};