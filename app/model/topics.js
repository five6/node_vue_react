'use strict';
module.exports = mongoose => {
    const topicsSchema = new mongoose.Schema({
        cid:{type:String},
        head:{type:String},
        body:{type:String},
        time:{type:Number}
    },{collection: "topics"});
    return mongoose.model('topics', topicsSchema);
}
