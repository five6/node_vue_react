'use strict';
// had enabled by egg
// exports.static = true;
// config/plugin.js
const config = {
    mysql :{
        enable: true,
        package: 'egg-mysql',
    },
    redis :{
        enable: true,
        package: 'egg-redis',
    },
    sessionRedis :{
        enable: true,
        package: 'egg-session-redis',
    },
    nunjucks: {
        enable: true,
        package: 'egg-view-nunjucks',
    },
    passport : {
        enable: true,
        package: 'egg-passport',
    },
    multipart:{
        enable:true,
        package:'egg-multipart'
    },
    schedule:{
        package: 'egg-schedule'
    },
    mongoose : {
        enable: true,
        package: 'egg-mongoose',
    },
    cors :{
        enable: true,
        package: 'egg-cors',
    },
    elasticsearch:{
        enable: true,
        package: 'egg-elasticsearch'
    },
    //启用静态资源
    static:true
};
module.exports =config;
