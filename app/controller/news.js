'use strict';
const _ = require('lodash');

module.exports = app => {
	class NewsController extends app.Controller {
		* articles(ctx){
			ctx.body =  yield ctx.service.news.articles();
		}
		* newsList(ctx){

		}
		* detail(ctx){

		}
	}
	return NewsController;
}