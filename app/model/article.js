'use strict';
module.exports = mongoose => {
	const articleSchema = new mongoose.Schema({
		_id:{ type: Object},
		categories:{type:Object},
		type:{type:String},
		body:{type:String},
		source:{type:String},
		country:{type:String},
		mm:{type:Array}	
	},{collection: "articles"});
	return mongoose.model('articles', articleSchema);
};