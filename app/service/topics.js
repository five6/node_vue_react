'use strict';
const _ = require('lodash');
const mongoose = require('mongoose');
module.exports = app => {
	class Topics extends app.Service{
		* list(ctx){
			const cond ={};
		  	const page = ctx.req.query.page || 1;
		    const size = parseInt(ctx.query.per_page || 30);
		    const skip = (page - 1) * size;
			return yield app.model.topics.find(cond).skip(skip).limit(size);
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
			return yield app.model.topic.deleteOne(cond);
		} 
	};
	return Topics;
}