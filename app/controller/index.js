'use strict';
var _ = require("underscore");
module.exports = app => {
  class HomeController extends app.Controller {
    * index(ctx) {
        const locals ={};
        if(ctx.isAuthenticated()){
            locals.userName =ctx.user.userName;
        };
        console.log(locals.userName);
        yield this.ctx.render('index.tpl',locals);
    }
    * register(){
    	yield this.ctx.render('register.tpl',this.locals);
    }
}
  return HomeController;
};
