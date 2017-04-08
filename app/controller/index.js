'use strict';
var _ = require("underscore");
module.exports = app => {
  class HomeController extends app.Controller {
    * index(ctx) {
        const locals ={};
        if(ctx.isAuthenticated()){
            locals.userName = ctx.user._id;
        };
        yield ctx.render('index.tpl',locals);
    }
    * register(){
    	yield ctx.render('register.tpl',this.locals);
    }
}
  return HomeController;
};
