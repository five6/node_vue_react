'use strict';
var _ = require("underscore");
module.exports = app => {
  class HomeController extends app.Controller {
    * login(ctx) {

        const body = ctx.request.body;
        const user = yield ctx.service.user.login(body);
        if(user){
            ctx.login(user,function(){
                console.log("logined  ")
                const locals = {
                      userName: ctx.user._id
                };
                ctx.response.redirect("/");
            }); 
          
        }else{
            console.log("not login")
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
    * books(ctx){
              const books =[
                {name:"java",'price':124.50},
                {name:"javascript",'price':50},
                {name:"python",'price':100},
                {name:"nodejs",'price':80}
            ]
            ctx.body = books;
      
    }
  }
  return HomeController;
};
