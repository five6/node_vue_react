'use strict';
var _ = require("underscore");

module.exports = app =>{
	class LogController extends app.Controller {
		* list(ctx){
		 	const list = yield ctx.service.event.list(ctx.query.time);
		 	console.log(list);
		 	if(list && list.length){
		 		ctx.body = list;
		 	}else{
 				const list2 = [
				{
					"userHead":"/public/images/head/1.jpg",
					"userId":"爱丽丝",
					"operation":"发表了一篇说说",
					"time": new Date().getTime() - 60 * 60 * 1000,
					"likes":13,
					"ifLike":false
				},
				{
					"userHead":"/public/images/head/1.jpg",
					"userId":"爱丽丝",
					"operation":"发表了一篇说说",
					"time": new Date().getTime() - 60 * 60 * 1000 * 20,
					"likes":13,
					"ifLike":true
				}
			]
			ctx.body = list2;
		 	}
		}
		* detail(ctx){

		}
		* create(ctx){
			const result = yield ctx.service.event.create(body);
		}
		* update(ctx){

		}
		* delete(ctx){

		}
	};
	return LogController;
}