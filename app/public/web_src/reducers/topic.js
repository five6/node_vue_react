import * as types from '../constants/actionTypes';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger}  from 'redux-logger';

function topics(state,action){
	switch(action.type){
		case "GET_TOPIC_LIST":
			return state;
		case "RECEIVED_TOPIC_LIST":
			return state;
		default:
			return state;
	}
}
const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(topics,applyMiddleware(...middleware));
export default store;