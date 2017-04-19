'use strict';
module.exports = mongoose => {
    const EventSchema = new mongoose.Schema({
        userHead: { type: String},//后面从user数据库获取
        userId: { type: String},
        operation: { type: Number},//1说说 2日志
        time: { type: Number},
        content:{type:String},
        title:{type:String},
        likes:{type:Number},
        updateTime:{type:Number},
        likeUsers:{type:Array}
    });
    return mongoose.model('event', EventSchema);
}
