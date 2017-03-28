'use strict';
module.exports  = {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  schedule: {
    type:"all",
    interval:"5m"
  },
  task: function* (ctx){ 
    const res = yield ctx.curl('https://cnodejs.org/api/v1/topics', {
      dataType: 'json',
    });
    ctx.app.cache = res.data.data;
  }
};