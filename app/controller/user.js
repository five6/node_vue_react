'use strict';
var _ = require("underscore");
module.exports = app => {
  class HomeController extends app.Controller {
    * login(ctx) {

        const body = ctx.request.body;
        const user = yield ctx.service.user.login(body);
        if(user){
            ctx.login(user);
            this.locals = {
                userName:user._id
            };
            // ctx.session.userName = this.locals.userName;
            yield ctx.render('hello.tpl',this.locals);
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
        ctx.logout();
        ctx.response.redirect('/');
    }
    * books(ctx){
        if(ctx.isAuthenticated()){
              const books =[
                {name:"java",'price':124.50},
                {name:"javascript",'price':50},
                {name:"python",'price':100},
                {name:"nodejs",'price':80}
            ]
            ctx.body =books;
        }else{
              const error = {
                     message:"not login error",
                     status:500
              }
              this.body = {error};
              this.status = error.status;
        }
      
    }
  }
  return HomeController;
};
