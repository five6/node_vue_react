import * as types from '../constants/ActionTypes';

export const add_topic = content => {
	type:type.ADD_TOPIC,
	content
}

export const delete_topic = content => {
	type:type.DELETE_TOPIC,
	content
}

export const update_topic = content => {
	type:type.UPDATE_TOPIC,
	content
}

export const get_topic_list = content => {
	type:type.GET_TOPIC_LIST,
	content
}
export const get_topic_detail = content => {
	type:type.GET_TOPIC_DETAIL,
	content
}