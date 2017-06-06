'use strict';
const _  = require('lodash');
const async = require('async');
var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');
const mongoose = require('mongoose');
module.exports = app => {
    var config = {};
    config.schedule = {
        interval:"5m",
        type:"all"
    };
    config.task = function* (ctx){
        var user_agent = 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)'
        var headers = { 'User-Agent' : user_agent };


        console.log("1111111");

    };
    return config;
}

