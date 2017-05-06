'use strict';
const _ = require("underscore");
module.exports = app => {
  class HomeController extends app.Controller {
    * index(ctx) {
        const locals ={};
        if(ctx.isAuthenticated()){
            locals.userName = ctx.user._id;
        };
        yield ctx.render('index.tpl',locals);
    }
    * login(ctx){
        yield ctx.render('login.tpl');
    }
    * register(ctx){
    	yield ctx.render('register.tpl');
    }
    * topics(ctx){
        const locals ={};
        if(ctx.isAuthenticated()){
            locals.userName = ctx.user._id;
        };
        yield ctx.render('topics.tpl',locals);
    }
    * topic(ctx){
        const locals = {
            topicId:ctx.params.id
        }
         if(ctx.isAuthenticated()){
            locals.userName = ctx.user._id;
        };
        yield ctx.render('topic.html',locals);
    }
    * album(ctx){
        yield ctx.render('album.tpl',{userName:ctx.user._id});
    }
   * profile(ctx){
        yield ctx.render('profile.tpl',{userName:ctx.user._id});
    }
}
  return HomeController;
};
