const moment = require("moment");
const mongoose = require('mongoose');
module.exports = app => {
	class Event extends app.Service{
		//查询方式，查询最后10条数据，然后排序，最后根据排序后最早的文章问基点，查找更早的10条数据
		* list(time){
			const cond ={};
			if(time){
				cond["time"] ={$lt:time}
			}
            return yield app.model.event.find(cond).sort({_id:-1}).limit(10);
		}
		* userEventList(){
			const cond ={
				userId:this.ctx.user._id
			};
			console.log(cond)
			return yield app.model.event.find(cond).sort({_id:-1});
		}	
		* detail(id){
				const cond = {
					"_id":new mongoose.Types.ObjectId(id)
				};
				const eventInfo = yield app.model.event.findOne(cond);
				console.log(eventInfo);
				return eventInfo || {code:1,msg:"NOT FOUND!"};
		}
		* create(body){
			console.log(this.ctx.user._id);
			const time = new Date().getTime()
			body.userId = this.ctx.user._id;
			body.time = time;
			body.likes = 0;
			body.updateTime = time;
			body.likeUsers =[];
			const event = new app.model.event(body);
            return event.save();
		}
		* update(body){
			const _id = body["_id"];
			delete body._id;
			const cond = {
					"_id":new mongoose.Types.ObjectId(_id)
			};
			const eventInfo = yield app.model.event.updateOne(cond,{"$set":body});
			return eventInfo;
		}
		* delete(id){
			const cond = {
				"_id":new mongoose.Types.ObjectId(id)
			}
			const result = yield app.model.event.deleteOne(cond);
		}
	}
	return Event;
}