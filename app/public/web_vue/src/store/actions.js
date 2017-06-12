import api from '../api/api';
import * as types  from './mutation-types';
export default {
	getNewsList({commit},{newsId,page,per_page,init}){
        commit(types.GET_NEWS_LIST,{init});
		api.getNewsList({newsId,page,per_page},function(err,data){
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
            if(err){
                commit(types.GET_NEWS_LIST_ERROR);
            }else{
                const newsList = data.newsList || [];
                commit(types.RECEIVED_MORE_NEWS,{newsList});
            }
        })
	}
}