'use strict';
const _ = require('lodash');
const mongoose = require('mongoose');
const async = require('async');
const fs = require("fs");
const path = require('path');
const BASE_DAYS = 1; //单位 天 >= 0;
module.exports = app => {
    var config = {};
    config.schedule = {
        interval: "30m",
        type: "all"
    }
    config.task = function*(ctx) {
        let photoPath = path.join(app.config.baseDir, "app/public/newsImages");
        let photos = fs.readdirSync(photoPath);
        let miniSeconds = new Date().valueOf() - 1000 * 60 * 60 * 24 * BASE_DAYS;
        let filePaths = [];
        let tasks = [];
        ctx.logger.info("删除 " + BASE_DAYS + " 天前的新闻图片！");
        _.each(photos, function (photo) {
            tasks.push(function (callback) {
                let path = photoPath + "/" + photo;
                try{
                    let state = fs.statSync(path);
                    let fileTime = new Date(state.ctime).valueOf();
                    if (fileTime <= miniSeconds) {
                        fs.unlink(path, function () {
                            ctx.logger.info("删除图片：" + photo);
                            callback();
                        });
                    }else {
                        callback();
                    }
                }catch (e){
                    ctx.logger.info(e);
                    callback();
                }

            });
        });
        async.parallel(tasks, function (err, result) {
            ctx.logger.info("删除 "+ BASE_DAYS +" 天前的news图片task已经跑了一次 ");

        });
    }
    return config;
}