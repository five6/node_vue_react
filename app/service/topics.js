'use strict';
const _ = require('lodash');
const mongoose = require('mongoose');
module.exports = app => {
	class Topics extends app.Service{
		* list(){
			const topics = yield app.model.topics.find({id:{$exists:true}}).limit(150).sort({_id:-1});
			const totalCount = yield app.model.topics.count({id:{$exists:true}});
			return {
				topics:topics,
				totalCount:totalCount
			}
		}
		* topic(_id){
			const cond = {
				"_id": new mongoose.Types.ObjectId(_id)
			}
			return yield app.model.topic.findOne(cond);
		}
		* create(body){
			const id = new mongoose.Types.ObjectId();
			const _id = new mongoose.Types.ObjectId(id);
			const topic = {
				id:id,
			 	_id:_id,
				tab:body.tab,
				title:body.title,
				content:body.content,
		        author_id:body.loginUser,
		        reply_count:0,
				visit_count: 0,
				create_at:new Date(),
				author:body.loginUser,
				replies:[]
			}
			console.log(topic);
			const topic2  =  new app.model.topics(topic);
			return topic2.save();
		}
		* update(body){
			body = body || {};
			const _id = body._id;
			delete body._id;
			const cond = { 
				"_id":new mongoose.Types.ObjectId(_id)
			};
			return yield app.model.topic.updateOne(cond,{"$set":body});
		}
		* delete(id){
			const cond = {
				"_id":new mongoose.Types.ObjectId(id)
			};
			console.log(cond)
			yield app.model.topics.deleteOne(cond);
			yield app.model.topic.deleteOne(cond);
			return;
		} 
		* more(ctx){
			const topicId = ctx.query.topicId;
			const cond ={
				"id":{"$exists":true},
				"_id":{
					$lt:new mongoose.Types.ObjectId(topicId)
				}
			};
			return yield app.model.topics.find(cond).limit(150).sort({_id:-1});
		}
	};
	return Topics;
}