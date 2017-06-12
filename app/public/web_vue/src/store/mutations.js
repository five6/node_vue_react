import * as types  from './mutation-types';
export default {
	[types.GET_NEWS_LIST](state,{init}){
		console.log("获取数据中");
		if(init){
            state.isFetching = true;
        }else{
            state.refreshing = true;
        }
	},
	[types.RECEIVED_NEWS_LIST](state,{newsList}){
		console.log("已经获取数据");
		state.newsList = newsList;
		state.isFetching = false;
		state.refreshing = false;
        state.page =2;
    },
	[types.GET_NEWS_LIST_ERROR](state){
		console.log("获取数据报错！");
		state.isFetching = false;
	},
    [types.GET_MORE_NEWS](state,{newsId}){
        console.log("获取更多的数据！");
        state.loading = true;
    },
    [types.RECEIVED_MORE_NEWS](state,{newsList}){
        console.log("获取更多的数据！");
        state.loading = false;
        state.newsList = state.newsList.concat(newsList);
        state.page++;
    }
}