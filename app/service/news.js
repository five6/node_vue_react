'use strict';
const moment = require("moment");
const mongoose = require('mongoose');
const _ = require('lodash');
module.exports = app =>{
	class NewsService extends app.Service{
		* list(ctx){
			let newsId = ctx.query.newsId;
            let page = ctx.query.page || 1;
            let size = parseInt(ctx.query.per_page || 20);
            let skip = (page - 1) * size;
            let cond = {};
            
            if(newsId){
                let _id = new mongoose.Types.ObjectId(newsId)
                cond["time"] ={$lt:_id}
            }
            console.log(size,"|",skip);
			return yield app.model.news.find(cond).sort({_id:-1}).limit(size).skip(skip);
		}
		* detail(id){
			const cond = {
				_id: new mongoose.Types.ObjectId(id)
			}
			const detail = yield app.model.news.find(cond);
			return detail || {};
		}
	};
	return NewsService;
}