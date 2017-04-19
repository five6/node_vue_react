var moment = require("moment");
var mongoose = require('mongoose');
module.exports = app => {
	class Event extends app.Service{
		* list(time){
			var cond = {
				"time":{$gte:time}
			}
            return yield app.model.event.find(cond);
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