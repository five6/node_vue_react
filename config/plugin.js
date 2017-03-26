'use strict';
// had enabled by egg
// exports.static = true;
// config/plugin.js
const config = {
    mysql :{
        enable: true,
        package: 'egg-mysql',
    },
    nunjucks: {
        enable: true,
        package: 'egg-view-nunjucks',
    }
};
module.exports =config;
