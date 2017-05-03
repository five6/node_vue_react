'use strict';
const _ = require('lodash');
const mongoose = require('mongoose');
module.exports =app => {
  var config = {};

  config.schedule = {
     interval: "30h",
      type: "all"
  };
  config.task = function* (ctx){ 
    const res = yield ctx.curl('https://cnodejs.org/api/v1/topics', {
      dataType: 'json',
    });
    const datas = res.data.data || [];
    var ops = [];
    _.each(datas,function(topic){
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
    bulkOperate(app.model.topics.bulkWrite,app.model.topics,ops,function(err,result){
        ctx.logger.info("执行一次task ： "+result);
    });
  };
  return config;
};

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
