import api from '../api/api';
import * as types  from './mutation-types';
export default {
	getNewsList({commit}){
		commit(types.GET_NEWS_LIST);
		api.getNewsList(function(err,data){
			if(err){
				commit(types.GET_NEWS_LIST_ERROR);
			}else{
				const newsList = data.newsList || [];
				commit(types.RECEIVED_NEWS_LIST,{newsList});
			}
			
		})
	},
    getMoreNews({commit},{newsId,page,per_page}){
		commit(types.GET_MORE_NEWS,{newsId});
		api.getMoreNews({newsId,page,per_page},function (err,data) {

        })
	}
}