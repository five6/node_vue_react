'use strict';
const _ = require('lodash');
module.exports = app => {
	class Topics extends app.Service{
		* topics(ctx){
			const cond ={};
			const topics = yield app.model.topics.find(cond);
			return topics;
		}
		* topic(_id){
			const cond = {
				"_id":_id	
			}
			const topics = yield app.model.topics.find(cond);
			return topic;
		}
	};
	return Topics;
}