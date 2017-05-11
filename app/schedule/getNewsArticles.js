'use strict';
const _ = require('lodash');
const async = require('async');
const mongoose = require('mongoose');
module.exports =  app => {
    let config = {};
    config.schedule = {
        interval:'30m',
        type:'all'
    };
    config.task =function* (ctx) {
        const res = yield ctx.curl('https://cnodejs.org/api/v1/topics', {
            dataType: 'json',
        });
        ctx.logger.info("执行一次task ： update_cache");
        ctx.app.cache = res.data.data;
    }
}