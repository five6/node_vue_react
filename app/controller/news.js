'use strict';
const _ = require('lodash');

module.exports = app => {
	class NewsController extends app.Controller {
		* newsList(ctx){
			const newsList =  yield ctx.service.news.list();
			ctx.body = {
				code:"0",
				newsList:newsList ||[]
			}
		}
		* detail(ctx){
			ctx.body =  yield ctx.service.news.detail();
		}
	}
	return NewsController;
}