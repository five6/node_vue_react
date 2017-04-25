'use strict';
const _  = require('lodash');
const async = require('async');

module.exports = app => {
	var config = {};
	config.schedule = {
		interval:"30s",
		type:"all"
	};
	config.task = function* (ctx){
		var tasks =[];
		var topics =[];
		const ids = yield app.model.topics.distinct("id");
		_.each(ids,function(id){
			tasks.push(function* (cb){
				const res = yield ctx.curl('https://cnodejs.org/api/v1/topic/'+id, {});
				const topic = res.data;
				ctx.logger.info(topic);
				topics.push(topic);
				cb();
			});
		});
		async.parallel(tasks,function(){

			ctx.logger.info("执行完毕"+topics);
		});
	};
	return config;
}	