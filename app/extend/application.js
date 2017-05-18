module.exports = {
    bulkOperate(fn, scope, arr, argus, cb) {
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

    },
};
