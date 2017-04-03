'use strict';
var _ = require("underscore");
module.exports = app => {
  class HomeController extends app.Controller {
    * index(ctx) {
        // const userList = yield this.ctx.service.user.userList();
        // const topics = yield this.ctx.app.cache || [];
        yield this.ctx.render('index.tpl',{});
    }
    * register(){
    	yield this.ctx.render('register.tpl',this.locals);
    }
}
  return HomeController;
};
