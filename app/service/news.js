'use strict';
const moment = require("moment");
const mongoose = require('mongoose');
module.exports = app =>{
	class NewsService extends app.Service{
		* articles(){
			const result = yield app.model.article.find();
			return result || [];
		}
		* newsList(articleId){
			const cond = {
				articleId:articleId
			}
			const newsList = yield app.model.news.find(cond);
			return newsList || [];
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