'use strict';
const _  = require('lodash');
const async = require('async');
const request = require('request');
const fs = require('fs');
const cheerio = require('cheerio');
const eventproxy = require('eventproxy');
const mongoose = require('mongoose');
module.exports = app => {
    let config = {};
    config.schedule = {
        interval:"30s",
        type:"all"
    };
    config.task = function* (ctx){
        let user_agent_a = "Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; en) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3";
        let headers = { 'User-Agent' : user_agent_a };
        let url ="http://news.sina.com.cn/hotnews/";
        let url2 = "http://fulilt.com/thread-19174-1-1.html";
        request(url,headers,function (err,response,body) {
            let newsList = {};
            if(!err && response.statusCode === 200){
                let $ = cheerio.load(body);
                let news_data_list = $(".ConsTi");
                news_data_list.each(function () {
                    let oneNews = $(this);
                    let newsTitle = oneNews.find("a").text();
                    let href = oneNews.find("a").attr("href");
                    let time = oneNews.next().next().text();
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
            let ops =[];
            newsList =_.chain(newsList).values(newsList).sortBy(function (news) {
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
            })
            app.bulkOperate(app.model.news.bulkWrite,app.model.news,ops,function(err,result){
                ctx.logger.info("保存news完成 ： ");
            });
        })
    };
    return config;
}

