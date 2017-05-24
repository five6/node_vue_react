'use strict';
const _ = require('lodash');
const async = require('async');
const mongoose = require('mongoose');
module.exports =  app => {
    let config = {};
    config.schedule = {
        interval:'30s',
        type:'all'
    };
    config.task =function* (ctx) {
        ctx.logger.info("执行一次爬虫task");
    }
}