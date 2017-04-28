import * as types from '../constants/actionTypes';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger}  from 'redux-logger';

function topicInfo(state=[],action){
	console.log("333333");
	switch(action.type){
		case types.GET_TOPIC_LIST:
			return action.topics;
		case types.RECEIVED_TOPIC_LIST:
			return 
				action.topics;		
		case types.GET_TOPIC_DETAIL:
			return 
				action.topic;
		case types.RECEIVED_TOPIC_DETAIL:
			return 
				action.topic;
		case types.WILL_ADD_TOPIC:
			return 
				action.topic;
		case types:WILL_UPDATE_TOPIC:
			return 
				ation.topic;
		case types:WILL_DELETE_TOPIC:
			return 
				ation.topic;
		case types.ADD_TOPIC:
			return [
				...state,
				action.text
			]
		case types.PUT_TOPIC:
			return state.map((topic,index) => {
				if(index == action.index){
					return _.extend(topic,action.text);
				}
			})
			return topic;
		case types.DELETE_TOPIC:
			sate.map((topic,index) => {
				if(index == action.index){
					state.slice(index,1);
				};
			})
			return state;
		default:
			return state;
	}
}
var reducers = combineReducers({
    topicInfo
});
var store;
if (process.env.NODE_ENV === "production") {
    store = createStore(reducers, applyMiddleware(thunk));
} else {
    store = createStore(reducers, applyMiddleware(thunk, createLogger()));
}
export default store ;