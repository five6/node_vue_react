'use strict';
const _ = require('lodash');
const mongoose = require('mongoose');
module.exports = app => {
	class Topics extends app.Service{
		* list(ctx){
			const cond ={};
		  	const page = ctx.req.query.page || 1;
		    const size = parseInt(ctx.query.per_page || 15);
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
			const topic  = yield new app.model.topic(body);
			return topic.save();
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