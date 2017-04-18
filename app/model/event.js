'use strict';
module.exports = mongoose => {
    const EventSchema = new mongoose.Schema({
    	_id: {type: String},
        userHead: { type: String},
        userId: { type: String},
        operation: { type: String},
        time: { type: Number},
        likes:{type:Number},
        ifLike:{type:Boolean}
    });
    return mongoose.model('event', EventSchema);
}
