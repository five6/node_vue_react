'use strict';
var _ = require("underscore");
module.exports = app => {
  class HomeController extends app.Controller {
    * login(ctx) {
        const body = ctx.request.body;
        const user = yield this.ctx.service.user.login(body);
        if(user){
            this.locals = {
                userName:user._id
            };
            ctx.session.userName = this.locals.userName;
            yield this.ctx.render('hello.tpl',this.locals);
        }else{
            console.log("not login")
            yield this.ctx.render('index.tpl',{});
        }
    }
    * register(ctx){
        const body = ctx.request.body;
        yield this.ctx.service.user.register(body);
        ctx.response.redirect('/')
    }
}
  return HomeController;
};
