'use strict';
const _  = require('lodash');
const async = require('async');
const request = require('request');
const fs = require('fs');
const cheerio = require('cheerio');
const eventproxy = require('eventproxy');
const mongoose = require('mongoose');
module.exports = app => {
    var config = {};
    config.schedule = {
        interval:"30m",
        type:"all"
    };
    config.task = function* (ctx){
        var user_agent_a = "Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; en) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3";
        var headers = { 'User-Agent' : user_agent_a };
        var url ="http://news.sina.com.cn/hotnews/";
        var url2 = "http://fulilt.com/thread-19174-1-1.html";
        request(url,headers,function (err,response,body) {
            var newsList = {};
            if(!err && response.statusCode === 200){
                var $ = cheerio.load(body);
                var news_data_list = $(".ConsTi");
                news_data_list.each(function () {
                    var oneNews = $(this);
                    var newsTitle = oneNews.find("a").text();
                    var href = oneNews.find("a").attr("href");
                    var time = oneNews.next().next().text();
                    var currentData = {
                        expireAt:new Date(new Date().getTime()+ 1000 * 60 * 60 * 24 * 7),//一周后自动过期删除
                        _id:app.getMd5(newsTitle),
                        title:newsTitle,
                        source:href,
                        _at:new Date(),
                        time:time
                    };
                    newsList[currentData._id] = currentData;
                });
            }
            var ops =[];
            var newsDbData = _.values(newsList);
            _.chain(newsDbData).sortBy(function (news) {
                return -news._at;
            }).each(function (news) {
                ops.push({
                    updateOne: {
                        filter: { _id: news._id},
                        update: {
                            "$set":news
                        },
                        upsert: true
                    }
                });
            }).value();
            app.bulkOperate(app.model.news.bulkWrite,app.model.news,ops,function(err,result){
                ctx.logger.info("保存news完成 ： ");
            });
        })
    };
    return config;
}

