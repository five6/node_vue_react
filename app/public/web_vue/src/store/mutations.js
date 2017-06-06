import * as types  from './mutation-types';
export default {
	[types.GET_NEWS_LIST](state){
		console.log("获取数据中");
		state.isFetching = true;
	},
	[types.RECEIVED_NEWS_LIST](state,{newsList}){
		console.log("已经获取数据");
		state.newsList = newsList;
		state.isFetching = false;
	},
	[types.GET_NEWS_LIST_ERROR](state){
		console.log("获取数据报错！");
		state.isFetching = false;
	}
}