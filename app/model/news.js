'use strict';
module.exports = mongoose => {
	const newsSchema = new mongoose.Schema({
		createdAt: { type: Date, expires: '1d' },
		_id:{ type: Object},
		title:{type:String},
		time:{type:String},
        _at:{type:Object},
        source:{type:String},
	},{collection: "news"});
	return mongoose.model('news', newsSchema);
};