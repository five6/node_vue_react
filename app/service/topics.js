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
				
			}
		}
	};
	return Topics;
}