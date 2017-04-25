'use scrict';
const _  = require('lodash');
module.exports = app => {
	class Topics extends app.Controller {
		* topics (){
			const topics = yield app.service.topics.topics();
			ctx.body = topics;
		}
		* topic(){
			const topicId = ctx.request.params.id;
			const topic = yield app.service.topic.topic(topicId);
			ctx.body = topic;
		}
	}
	return Topics;
}