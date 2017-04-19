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
					"operation":1,//1说说 2日志
					"time": new Date().getTime() - 60 * 60 * 1000,
					"likes":13,
					"likeUsers":[]
				},
				{
					"userHead":"/public/images/head/1.jpg",
					"userId":"爱丽丝",
					"title":"学习进度",
					"operation":2, //1说说 2 日志
					"time": new Date().getTime() - 60 * 60 * 1000 * 20,
					"likes":13,
					"likeUsers":[]
				}
			]
			ctx.body = list2;
		 	}
		}
		* detail(ctx){
			ctx.body = yield ctx.service.event.detail(ctx.query.id);
		}
		* create(ctx){
			var body = ctx.request.body;

			const result = yield ctx.service.event.create(body);
			ctx.body = {code:0,msg:"success"};
		}
		* update(ctx){

		}
		* delete(ctx){

		}
	};
	return LogController;
}