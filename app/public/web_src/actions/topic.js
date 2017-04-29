import {GET_TOPIC_LIST,RECEIVED_TOPIC_LIST}  from '../constants/ActionTypes';

export const action_get_topic_list = content => ({
		type:GET_TOPIC_LIST,
		content
})

export const action_received_topic_list = content => ({
	type:RECEIVED_TOPIC_LIST,
	content
})


const fetch_topics = topics => dispatch =>{
	console.log("222222222222");
	dispatch(action_get_topic_list(topics));
	$.ajax({
		url:"/api/topics",
		method:"get",
		type:"json",
		success:function(topics){
			dispatch(action_received_topic_list(topics));
		},
		error:function(err,status){
			console.log(err);
		}
	})
}
export const fetch_topics_if_need = topics => (dispatch,getState) => {
	console.log(" <<<< fetch_topics_if_need  >>>>");
	console.log("11111111");
	dispatch(fetch_topics(topics));
}



// export const action_will_add_topic = content => {
// 	type:types.WILL_ADD_TOPIC,
// 	content
// }

// export const action_will_delete_topic = content => {
// 	type:types.WILL_DELETE_TOPIC,
// 	content
// }

// export const action_will_update_topic = content => {
// 	type:types.WILL_UPDATE_TOPIC,
// 	content
// }

// export const action_add_topic = content => {
// 	type:types.ADD_TOPIC,
// 	content
// }


// export const action_delete_topic = content => {
// 	type:types.DELETE_TOPIC,
// 	content
// }

// export const action_update_topic = content => {
// 	type:types.UPDATE_TOPIC,
// 	content
// }



// export const action_get_topic_detail = content => {
// 	type:types.GET_TOPIC_DETAIL,
// 	content
// }

// export const action_received_topic_detail = content => {
// 	type:types.RECEIVED_TOPIC_DETAIL,
// 	content
// }


// const fetch_topic_detail = topicId => dispatch => {
// 	dispatch(action_get_topic_detail());
// 	$.ajax({
// 		url:"/api/topic/"+id,
// 		method:"get",
// 		type:"json",
// 		success:function(topics){
// 			dispatch(action_received_topic_detail(topic));
// 		},
// 		error:function(err,status){
// 			console.log(err);
// 		}
// 	})
// }

// const me_add_topic = topic => dispatch => {
// 	dispatch(action_will_add_topic(topic));
// 	$.ajax({
// 		url:"",
// 		method:"post",
// 		type:"json",
// 		data:topic,
// 		success:function(result){
// 			dispatch(action_add_topic(topic));
// 		},
// 		error:function(err,s,o){
// 			console.log(err);
// 		}
// 	})
// }

// const me_update_topic = topic => dispatch => {
// 	dispatch(will_update_topic(topic));
// 	$.ajax({
// 		url:"/api/topics/:id",
// 		method:"put",
// 		data:topic,
// 		type:"json",
// 		data:topic,
// 		success:function(result){
// 			dispatch(update_topic(topic));
// 		},
// 		error:function(err,s,o){
// 			console.log(err);
// 		}
// 	})
// }

// const me_delete_topic = topicId => dispatch => {
// 	dispatch(will_update_topic(topicId));
// 	$.ajax({
// 		url:"/api/topics/"+topicId,
// 		method:"delete",
// 		type:"json",
// 		data:topic,
// 		success:function(result){
// 			dispatch(update_topic(topic));
// 		},
// 		error:function(err,s,o){
// 			console.log(err);
// 		}
// 	})
// }



// export const fetch_topic_detail_if_need = topicId => (dispatch,getState) => {
// 	console.log("<<<< fetch_topic_detail_if_need >>>>");
// 	dispatch(fetch_topic_detail(topicId));
// }
// export const for_update_topic = topic => (dispatch,getState) => {
// 	console.log("<<<< for_update_topic >>>>");
// 	dispatch(me_update_topic(topic));
// }
// export const for_add_topic= topic => (dispatch,getState) => {
// 	console.log("<<<< for_add_topic >>>>");
// 	dispatch(me_add_topic(topic));
// }
// export const for_delete_topic= topicId => (dispatch,getState) => {
// 	console.log("<<<< for_delete_topic >>>>");
// 	dispatch(me_delete_topic(topicId));
// }


