'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = 'hi, egg';
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
	      console.log(dataList)
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
