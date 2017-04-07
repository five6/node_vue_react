'use strict';
var _ = require("underscore");
module.exports = app => {
  class HomeController extends app.Controller {
    * login(ctx) {

        const body = ctx.request.body;
        const user = yield ctx.service.user.login(body);
        if(user){
            this.ctx.login(user);
            console.log(this.ctx);
            this.locals = {
                userName:this.ctx.user._id
            };
            // ctx.session.userName = this.locals.userName;
            yield this.ctx.render('hello.tpl',this.locals);
        }else{
            // ctx.session.userName = null;
            console.log("not login")
            ctx.response.redirect('/')
        }
    }
    * register(ctx){
        const body = ctx.request.body;
        yield ctx.service.user.register(body);
        ctx.response.redirect('/')
    }
    * logout(ctx){
        this.ctx.logout();
        this.ctx.redirect('/');
    }
    * books(ctx){
        if(this.ctx.isAuthenticated()){
              const books =[
                {name:"java",'price':124.50},
                {name:"javascript",'price':50},
                {name:"python",'price':100},
                {name:"nodejs",'price':80}
            ]
            this.ctx.body =books;
        }else{
              const error = {
                     message:"not login error",
                     status:500
              }
              this.ctx.body = {error};
              this.ctx.status = error.status;
        }
      
    }
  }
  return HomeController;
};
