import {GET_TOPIC_LIST,RECEIVED_TOPIC_LIST,RECEIVED_TOPIC_DETAIL,GET_TOPIC_DETAIL,}  from '../constants/ActionTypes';

export function action_get_topic_list(topics){
		return {
			type:GET_TOPIC_LIST,
			topics
		}
}

export function action_received_topic_list(topics) {
  return {
    type: RECEIVED_TOPIC_LIST,
    topics
  };
}

export function action_get_topic_detail(topicId){
	return {
		type:GET_TOPIC_DETAIL,
		topicId
	}
}
export function action_received_topic_detail(topic){
	return {
		type:RECEIVED_TOPIC_DETAIL,
		topic
	};
}
export function action_delete_topic(topicId){
	return {
		type:DELETE_TOPIC,
		topicId
	};
}
export function action_received_delete_topic(topicId){
	return {
		type:RECEIVED_DELETE_TOPIC,
		topicId
	};
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
	 dispatch(action_delete_topic(delete_topic(topicId)));
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
export const fetch_topics_if_need = topics => (dispatch,getState) => {
	dispatch(fetch_topics(topics));
}

export const fetch_topicDetail_if_need = topicId => (dispatch,getState) => {
	dispatch(fetch_topicDetail(topicId));
}

export const fetch_delete_topic_if_need = topicId =>(dispatch,getState) => {
	dispatch(fetch_delete_topic(topicId))
}

