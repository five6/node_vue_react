import {GET_TOPIC_LIST,RECEIVED_TOPIC_LIST}  from '../constants/ActionTypes';

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
export const fetch_topics_if_need = topics => (dispatch,getState) => {
	dispatch(fetch_topics(topics));
}

export const fetch_topicDetail_if_need = topicId => (dispatch,getState) => {
	dispatch(fetch_topicDetail(topicId));
}

