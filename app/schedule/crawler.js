'use strict';
const _  = require('lodash');
const async = require('async');
const request = require('request');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const eventproxy = require('eventproxy');
const mongoose = require('mongoose');
module.exports = app => {
    let config = {};
    config.schedule = {
        interval:"30m",
        type:"all"
    };
    config.task = function* (ctx){
        let user_agent_a = "Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; en) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3";
        let headers = { 'User-Agent' : user_agent_a };
        let url ="http://news.sina.com.cn/hotnews/";
        let url2 = "http://fulilt.com/thread-19174-1-1.html";
        request(url,headers,function (err,response,body) {
            let newsList = {};
            let ops =[];
            if(!err && response.statusCode === 200){
                let $ = cheerio.load(body);
                let news_data_list = $(".ConsTi");
                news_data_list.each(function () {
                    let oneNews = $(this);
                    let newsTitle = oneNews.find("a").text();
                    let href = oneNews.find("a").attr("href");
                    let time = oneNews.next().next().text()||"";
                    if(time.charAt(time.length-1)===":"){
                        time = time.substring(0,time.length-1);
                    }
                    let currentData = {
                        expireAt:new Date(new Date().getTime()+ 1000 * 60 * 60 * 24 * 7),//一周后自动过期删除
                        md5:app.getMd5(newsTitle),
                        title:newsTitle,
                        source:href,
                        _at:new Date(),
                        time:time
                    };
                    newsList[currentData.md5] = currentData;
                });
            }
            newsList = _.chain(newsList).values(newsList).sortBy(function (news) {
                return -news._at;
            }).value();
            _.each(newsList,function (news) {
                ops.push({
                    updateOne: {
                        filter: { md5: news.md5},
                        update: {
                            "$set":news
                        },
                        upsert: true
                    }
                });
            });
            // 内容图片
            let imageUrls = {};
            _.each(newsList,function (news) {
                imageUrls[news.md5]= function (callback) {
                    request(news.source,headers,function (err,response,body) {
                        if(!err && response.statusCode === 200){
                            let $2 = cheerio.load(body);
                            let imgElement = $2(".img_wrapper");
                            let ops2Obj = {
                                md5:news.md5,
                                images:[]
                            };
                            async.each(imgElement,function (imgDiv,subCallback) {
                                let img = $2(imgDiv).find("img");
                                let imgSrc = $2(img).attr("src");
                                if(img && imgSrc){
                                    let imgMd5Src = app.getMd5(imgSrc);
                                    ops2Obj.images.push(imgMd5Src);
                                    var photoPath = path.join(app.config.baseDir, "app/public/newsImages");
                                    var fileWriteStream = fs.createWriteStream(photoPath+"/" + imgMd5Src);
                                    request(imgSrc).pipe(fileWriteStream).on('close', function () {
                                        subCallback();
                                    });
                                }else{
                                    subCallback();
                                }
                            },function (err,subResult) {
                                callback(null,{
                                    updateOne: {
                                        filter: { md5: ops2Obj.md5},
                                        update: {
                                            "$set":{images:ops2Obj.images}
                                        },
                                        upsert: true
                                    }
                                })
                            });
                        }
                    })
                };
            });
            async.waterfall([
                function (sub_callback) {
                    app.bulkOperate(app.model.news.bulkWrite,app.model.news,ops,function(){
                        ctx.logger.info("保存news title完成 ");
                        sub_callback(null,{});
                    });
                },
                function (result,sub_callback) {
                    async.parallel(imageUrls,function (err,result2) {
                        ctx.logger.info("保存图片到本地完成： ");
                        sub_callback(null,result2);
                    })
                },
                function (result,sub_callback) {
                    let opsOptions = _.values(result);
                    app.bulkOperate(app.model.news.bulkWrite,app.model.news,opsOptions,function(err,result){
                        ctx.logger.info("保存图片到数据库完成！");
                        sub_callback();
                    });
                }
            ],function (err,result) {
                ctx.logger.info("爬虫 task  完成！");
            });
        });
    };
    return config;
}

