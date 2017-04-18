var moment = require("moment");
module.exports = app => {
	class Event extends app.Service{
		* list(time){
			var cond = {
				"time":{$gte:time}
			}
            return yield app.model.event.find(cond);
		}	
		* detail(body){

		}
		* create(body){
			const event = new app.model.event(body);
            const result = event.save();
            return result;
		}
		* update(body){

		}
		* delete(body){

		}
	}
	return Event;
}