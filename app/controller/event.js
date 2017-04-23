'use strict';
const _ = require("underscore");

module.exports = app =>{
	class LogController extends app.Controller {
		* list(ctx){
		 	const list = yield ctx.service.event.list(ctx.query.time);
		 	ctx.body = list || [];
		}
		* detail(ctx){
			ctx.body = yield ctx.service.event.detail(ctx.query.id);
		}
		* create(ctx){
			const body = ctx.request.body;

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