import * as types  from '../constants/ActionTypes.album';

export function action_get_albums(userId) {
    return {
        type:types.F_ALBUMS,
        userId
    }
}
export function action_received_albums(albums) {
    return{
        type:types.R_ALBUMS,
        albums
    }
}

export function action_delete_album(albumId) {
    return{
        type:types.DEL_ALBUM,
        albumId
    }
}
export function action_received_delete_album(albumId) {
    return{
        type:types.R_DEL_ALBUM,
        albumId
    }
}

export function action_add_album(album) {
    return{
        type:types.ADD_ALBUM,
        album
    }
}
export function action_received_add_album(album) {
    return{
        type:types.R_ADD_ALBUM,
        album
    }
}

export function action_add_photo(photo) {
    return{
        type:types.ADD_PHOTO,
        photo
    }
}
export function action_received_add_photo(photo) {
    return{
        type:types.R_ADD_PHOTO,
        photo
    }
}

export function action_delete_photo(photoId) {
    return{
        type:types.DEL_PHOTO,
        photoId
    }
}
export function action_received_delete_photo(photoId) {
    return{
        type:types.R_DEL_PHOTO,
        photoId
    }
}

const ajax_get_albums = userId => dispatch => {
    dispatch(action_get_albums(userId));
    $.ajax({
        url:"/api/albums",
        method:"get",
        type:"json",
        success:function(topics){
            dispatch(action_received_albums(topics));
        },
        error:function(err,status){
            console.log(err);
        }
    })
};