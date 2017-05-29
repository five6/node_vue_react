'use strict';
var _ = require("underscore");
module.exports = app => {
  class HomeController extends app.Controller {
    * login(ctx) {

        const body = ctx.request.body;
        const user = yield ctx.service.user.login(body);
        console.log(user._id);
        if(user){
            ctx.login(user,function(){
                const locals = {
                      userName: ctx.user._id
                };
                ctx.response.redirect("/");
            }); 
          
        }else{
            ctx.response.redirect('/')
        }
    }
    * register(ctx){
        const body = ctx.request.body;
        yield ctx.service.user.register(body);
        ctx.redirect('/')
    }
    * logout(ctx){
        ctx.logout();
        ctx.response.redirect('/')
    }
    * update(ctx){
        const body = ctx.request.body;
        yield ctx.service.user.update(body);
        ctx.logout();
        ctx.response.redirect('/');
    }
  }
  return HomeController;
};
