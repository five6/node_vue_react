var moment = require("moment");
var mongoose = require('mongoose');
module.exports = app => {
	class Event extends app.Service{
		//查询方式，查询最后10条数据，然后排序，最后根据排序后最早的文章问基点，查找更早的10条数据
		* list(time){
			var cond ={};
			if(time){
				cond["time"] ={$gte:time}
			}
            return yield app.model.event.find(cond).sort({_id:-1}).limit(10);
		}	
		* detail(id){
				var cond = {
					"_id":new mongoose.Types.ObjectId(id)
				};
				const eventInfo = yield app.model.event.findOne(cond);
				return eventInfo || {code:1,msg:"NOT FOUND!"};
		}
		* create(body){
			console.log(this.ctx.user._id);
			var time = new Date().getTime()
			body.userId = this.ctx.user._id;
			body.time = time;
			body.likes = 0;
			body.updateTime = time;
			body.likeUsers =[];
			const event = new app.model.event(body);
            return event.save();
		}
		* update(body){

		}
		* delete(body){

		}
	}
	return Event;
}