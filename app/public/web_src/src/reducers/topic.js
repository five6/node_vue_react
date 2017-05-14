import * as types from '../constants/actionTypes';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger}  from 'redux-logger';
import 	_ from 'lodash';
const initialState = {
	topics:[],
	topic:{}
}
function topicReducer(state = initialState,action){
	switch(action.type){
		case types.GET_TOPIC_LIST:
			return Object.assign({}, state, {
		       topics: action.topics
		    });
		case types.RECEIVED_TOPIC_LIST:
			return Object.assign({}, state, {
		       topics: action.topics
		    });
	    case types.GET_TOPIC_DETAIL:
	    	return Object.assign({},state,{
	    		topicId:action.topicId
	    	});
    	case types.RECEIVED_TOPIC_DETAIL:
    		return Object.assign({},state,{
    			topic:action.topic
    		});
		case types.DELETE_TOPIC:
			return Object.assign({},state,{
	    		topicId:action.topicId
	    	});
		case types.RECEIVED_DELETE_TOPIC:
			return Object.assign({},state,{
	    		topics: state.topics.filter(topic =>
		        	topic.id !== action.topicId
	      		)
	    	});
    	case types.ADD_TOPIC:
    		return Object.assign({}, state, {
		       topic: action.topic
		    }); 
	    case types.RECEIVED_ADD_TOPIC:
	    	return Object.assign({}, state, {
		       topic: action.topic
		    }); 
	    case types.GET_MORE_TOPICS:
	    	return Object.assign({},state,{
	    		topicId:action.topicId
	    	});
	    case types.RECEIVED_GET_MORE_TOPICS:
	    	const newTopics = action.topics;
	    	const nowTopics = state.topics;
	    	return Object.assign({}, state, {
		       topics: nowTopics.concat(newTopics)
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