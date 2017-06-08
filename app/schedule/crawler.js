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
        interval:"30s",
        type:"all"
    };
    config.task = function* (ctx){
        var user_agent_a = "Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; en) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3";
        var user_agent = 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)'
        var headers = { 'User-Agent' : user_agent_a };
        var url ="http://news.sina.com.cn/hotnews/";
        var url2 = "http://fulilt.com/thread-19174-1-1.html";
        request(url,headers,function (err,response,body) {
            console.log(err)
            if(!err && response.statusCode === 200){
                var $ = cheerio.load(body);
                var news_data_list = $(".ConsTi");
                var newsList = [];
                news_data_list.each(function () {
                    var oneNews = $(this);
                    var newsTitle = oneNews.find("a").text();
                    var href = oneNews.find("a").attr("href");
                    var time = oneNews.next().next().text();
                    var currentData = {
                        title:newsTitle,
                        body:href,
                        time:time
                    };
                    newsList.push(currentData);
                    console.log(currentData)
                });
                console.log(newsList.length)
            }
        })
    };
    return config;
}

