'use scrict';
const _  = require('lodash');
module.exports = app => {
	class Topics extends app.Controller {
		* topics (ctx){
			const topics = yield app.service.topics.topics(ctx);
			ctx.body = topics;
		}
		* topic(ctx){
			const topicId = ctx.request.params.id;
			const topic = yield app.service.topic.topic(topicId);
			ctx.body = topic;
		}
		* update(ctx){
			const body = ctx.request.body;
			const topic = yield app.service.topic.update(body);
			ctx.body = {code:0,msg:"success"};
		}
		* create(ctx){
			const body = ctx.request.body;
			const topic = yield app.service.topic.create(body);
			ctx.body = {code:0,msg:"success"};
		}
		* delete(ctx){
			const topicId = ctx.request.params.id;
			const topic = yield app.service.topic.delete(topicId);
			ctx.body = {code:0,msg:"success"};
		}
	}
	return Topics;
}