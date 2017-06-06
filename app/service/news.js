'use strict';
const moment = require("moment");
const mongoose = require('mongoose');
const _ = require('lodash');
module.exports = app =>{
	class NewsService extends app.Service{
		* list(){
			const news = yield app.model.news.find();
			let newsList = [];
			for(let i=0;i<10000000;i++){
				newsList.push({
					_id:"news-"+i,
					content:"测试新闻"
				});
			}
			return [];
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