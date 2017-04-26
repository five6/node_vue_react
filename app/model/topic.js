'use strict';
module.exports = mongoose => {
    const TopicSchema = new mongoose.Schema({
        id:{type:String},
        author_id:{type:String},
        tab:{type:String},
        content:{type:String},
        title:{type:String},
        reply_count: {type:Number},
		visit_count: {type:Number},
		create_at:{type:String},
		author:{type:Object},
		replies:{type:Array}
    },{collection: "topic"});
    return mongoose.model('topic', TopicSchema);
}
