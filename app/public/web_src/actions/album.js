import * as types from '../constants/ActionTypes';
export const add_album = content => {
	type:type.ADD_ALBUM,
	content
};

export const delete_album = content => {
	type:type.DELETE_ALBUM,
	content
}

export const update_album = content => {
	type:type.UPDATE_ALBUM,
	content
}

export const get_albums = content => {
	type:type.GET_ALBUMS,
	content
}

export const add_photo = content => {
	type:type.ADD_PHOTO,
	content
}
export const delete_photo = content => {
	type:type.DELETE_PHOTO,
	content
}

export const update_photo = content => {
	type:type.UPDATE_PHOTO,
	content
}
export const get_photos = content => {
	type：type.GET_PHOTOS,
	content
}