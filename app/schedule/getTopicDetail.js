'use strict';
const _  = require('lodash');
const async = require('async');
const mongoose = require('mongoose');
module.exports = app => {
	var config = {};
	config.schedule = {
		interval:"30m",
		type:"all"
	};
	config.task = function* (ctx){
		var tasks =[];
		var topics =[];
		const ids = yield app.model.topics.distinct("id");

		function* range() {
		  for(var i=0;i< ids.length;i++){
		  	const id = ids[i];
			const result =  yield ctx.curl('https://cnodejs.org/api/v1/topic/'+id, {
				 dataType: 'json'
			});
			const topic = result.data.data ;
			if(topic){
				topics.push(topic);
			}
		  }
		} 
		//先把topic对应的topic 获取 ，然后保存detail
		yield range();
		var ops = [];
	    _.each(topics,function(topic){
	      const _id = new mongoose.Types.ObjectId(topic.id);
	      delete topic._id;
	      ops.push({
	          updateOne: {
	              filter: { _id: _id},
	              update: {
	                  "$set":topic
	              },
	              upsert: true
	          }
	      });
	    });
	    bulkOperate(app.model.topic.bulkWrite,app.model.topic,ops,function(err,result){
	        ctx.logger.info("保存topic详情完成 ： ");
	    });
	};
	return config;
}
function bulkOperate(fn, scope, arr, argus, cb) {
    if (!cb) {
        cb = argus;
        argus = [];
    }
    if (arr.length==0) {
        return cb();
    }
    if (arr.length <= 1000) {
        var parameters = [arr, cb];
        parameters.splice.apply(parameters, [1, 0].concat(argus));
        fn.apply(scope, parameters);
    } else {
        var fns = [];

        function add(data) {
            fns.push(function(cb) {
                var parameters = [data, cb];
                parameters.splice.apply(parameters, [1, 0].concat(argus));
                fn.apply(scope, parameters);
            })
        }
        while (arr.length > 0) {
            var data = arr.slice(0, 1000);
            arr = arr.slice(1000);
            add(data);
        }
        async.parallel(fns, function(err, result) {
            if (err) {
                cb(err);
            } else {
                cb(null, _.flatten(result));
            }
        })
    }
}

