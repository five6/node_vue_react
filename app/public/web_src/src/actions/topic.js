import * as types  from '../constants/ActionTypes';

export function action_get_topic_list(topics){
		return {
			type:types.GET_TOPIC_LIST,
			topics
		}
}

export function action_received_topic_list(topics) {
  return {
    type: types.RECEIVED_TOPIC_LIST,
    topics
  };
}

export function action_get_topic_detail(topicId){
	return {
		type:types.GET_TOPIC_DETAIL,
		topicId
	}
}
export function action_received_topic_detail(topic){
	return {
		type:types.RECEIVED_TOPIC_DETAIL,
		topic
	};
}
export function action_delete_topic(topicId){
	return {
		type:types.DELETE_TOPIC,
		topicId
	};
}
export function action_received_delete_topic(topicId){
	return {
		type:types.RECEIVED_DELETE_TOPIC,
		topicId
	};
}
export function action_add_topic(topic){
	return {
		type:types.ADD_TOPIC,
		topic
	}
}
export function action_received_add_topic(topic){
	return {
		type:types.RECEIVED_ADD_TOPIC,
		topic
	}
}
const fetch_topicDetail = topicId => dispatch => {	
	dispatch(action_get_topic_detail(topicId));
	$.ajax({
		url:"/api/topics/"+topicId,
		method:"get",
		type:"json",
		success:function(topics){
			return dispatch(action_received_topic_detail(topics));
		},
		error:function(err,status){
			console.log(err);
		}
	})
}
const fetch_topics = topics => dispatch =>{
	dispatch(action_get_topic_list(topics));
	$.ajax({
		url:"/api/topics",
		method:"get",
		type:"json",
		success:function(topics){
			return dispatch(action_received_topic_list(topics));
		},
		error:function(err,status){
			console.log(err);
		}
	})
}
const fetch_delete_topic = topicId => dispatch => {
 	dispatch(action_delete_topic(topicId));
	$.ajax({
		url:"/api/topics",
		method:"get",
		type:"json",
		success:function(){
			return dispatch(action_received_delete_topic(topicId));
		},
		error:function(err,status){
			console.log(err);
		}
	})
}
const fetch_add_topic = topic => dispatch => {
	dispatch(action_delete_topic(topic));
	$.ajax({
		url:"/api/topics/create",
		method:"post",
		type:"json",
		data:{
			topic:JSON.stringify(topic)
		},
		success:function(){
			return dispatch(action_received_delete_topic(topicId));
		},
		error:function(err,status){
			console.log(err);
		}
	})
}
export const fetch_topics_if_need = topics => (dispatch,getState) => {
	dispatch(fetch_topics(topics));
}

export const fetch_topicDetail_if_need = topicId => (dispatch,getState) => {
	dispatch(fetch_topicDetail(topicId));
}

export const fetch_delete_topic_if_need = topicId =>(dispatch,getState) => {
	dispatch(fetch_delete_topic(topicId))
}

export const fetch_add_topc_if_need = topic =>(dispatch,getState) => {
	dispatch(fetch_add_topic(topic))
}
