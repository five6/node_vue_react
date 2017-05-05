import * as types from '../constants/actionTypes';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger}  from 'redux-logger';

const initialState = {
	topics:[]
}
function topicReducer(state = initialState,action){
	switch(action.type){
		case "GET_TOPIC_LIST":
			return Object.assign({}, state, {
		       topics: action.topics
		    });
		case "RECEIVED_TOPIC_LIST":
			return Object.assign({}, state, {
		       topics: action.topics
		    });
	    case "GET_TOPIC_DETAIL":
	    	return Object.assign({},state,{
	    		topicId:action.topicId
	    	});
    	case "RECEIVED_TOPIC_DETAIL":
    		return Object.assign({},state,{
    			topic:action.topic
    		});
		default:
			return state;
	}
}
const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}



const store = createStore(
  topicReducer,
  applyMiddleware(...middleware)
)

export default store;