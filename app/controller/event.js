'use strict';
var _ = require("underscore");

module.exports = app =>{
	class LogController extends app.Controller {
		* list(ctx){
			const list = [
				{
					"userHead":"/public/images/head/1.jpg",
					"userId":"爱丽丝",
					"operation":"发表了一篇说说",
					"time": new Date().getTime(),
					"likes":13
				}
			]
			ctx.body = list;
		}
		* detail(ctx){

		}
		* create(ctx){

		}
		* update(ctx){

		}
		* delete(ctx){

		}
	};
	return LogController;
}