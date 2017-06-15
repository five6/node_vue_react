'use strict';
const _ = require('lodash');
const mongoose = require('mongoose');
const async = require('async');
module.exports = app => {
	var config = {};
	config.schedule = {
	 	interval: "1m",
      	type: "all"
	}
	config.task = function* (ctx){
        let taskObj = {};
		async.parallel(taskObj,function(err,result){
			ctx.logger.info("完成一次删除旧信息task");
		});
	}
    return config;
}