'use strict';
const _ = require("underscore");

module.exports = app =>{
	class TopicController extends app.Controller {
		* list(ctx){
		 	const list = yield ctx.service.topics.list(ctx);
		 	ctx.body = list || [];
		}
		* topic(ctx){
		 	const list = yield ctx.service.topics.topic(ctx.params.id);
		 	ctx.body = list || [];
		}
		* detail(ctx){
			ctx.body = yield ctx.service.topics.detail(ctx.params.id);
		}
		* create(ctx){
			const body = ctx.request.body;

			const result = yield ctx.service.topics.create(body);
			ctx.body = {code:0,msg:"success"};
		}
		* update(ctx){
			const body = ctx.request.body;
			const result = yield ctx.service.topics.update(body);
			ctx.body = {code:0,msg:"success"};
		}
		* delete(ctx){
			const result = yield ctx.service.topics.delete(ctx.params.id);
			ctx.body = {code:0,msg:"success"};
		}
	};
	return TopicController;
}