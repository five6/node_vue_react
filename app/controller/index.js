'use strict';
var _ = require("underscore");
module.exports = app => {
  class HomeController extends app.Controller {
    * index(ctx) {
        // const userList = yield this.ctx.service.user.userList();
        // const topics = yield this.ctx.app.cache || [];
        const locals ={
            userName:ctx.session.userName
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
