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
    schedule:{
        package: 'egg-schedule'
    }

};
module.exports =config;
