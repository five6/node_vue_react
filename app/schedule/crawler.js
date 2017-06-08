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
        interval:"5m",
        type:"all"
    };
    config.task = function* (ctx){
        var user_agent_a = "Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; en) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3";
        var user_agent = 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)'
        var headers = { 'User-Agent' : user_agent_a };
        var url ="http://www.2apen.com/";
        var url2 = "http://fulilt.com/thread-19174-1-1.html";
        request(url,function(err,response,body){
            if(!err && response.statusCode === 200){
                var $ = cheerio.load(body);
                var imgs = $("img.photo");
                var courseData = [];
                imgs.each(function () {
                    console.log($(this).attr("src"));
                });
            }
        });
    };
    return config;
}

