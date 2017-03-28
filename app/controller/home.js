'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
        const userList = yield this.ctx.service.user.userList();
        const topics = yield this.ctx.app.cache || [];
        this.locals = {
            users:userList,
            topics:topics
        };
        yield this.ctx.render('index.tpl',this.locals);
    }
    * profile(){
        const uid = this.ctx.params.id;
        const user = yield this.ctx.service.user.findOne(uid);
        this.locals = {
            user:user[0]
        }
        yield this.ctx.render('profile.tpl',this.locals )

    }
    * dashboard(){

    	this.ctx.body = "dashboard";
    }
    * list() {
	      const dataList = {
	        list: [
	          { id: 1, title: 'this is news 1', url: '/news/1' },
	          { id: 2, title: 'this is news 2', url: '/news/2' }
	        ]
	      };
	      yield this.ctx.render('news/list.tpl', dataList);
  	}
    * n1() {
      yield this.ctx.render('news/1.tpl');
    }
  	* n2() {
      yield this.ctx.render('news/2.tpl');
    }
}
  return HomeController;
};
