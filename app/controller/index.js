'use strict';
var _ = require("underscore");
module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
        // const userList = yield this.ctx.service.user.userList();
        // const topics = yield this.ctx.app.cache || [];
        this.locals = {

        };
        yield this.ctx.render('index.tpl',this.locals);
    }
    * register(){
    	this.locals = {

    	}
    	yield this.ctx.render('register.tpl',this.locals);
    }
}
  return HomeController;
};
