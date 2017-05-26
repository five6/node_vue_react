import * as types  from '../constants/ActionTypes.album';

export function action_get_albums(albums) {
    return {
        type:types.F_ALBUMS,
        albums
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

const ajax_get_albums = albums => dispatch => {
    dispatch(action_get_albums(albums));
    $.ajax({
        url:"/api/albums",
        method:"get",
        type:"json",
        success:function(result){
            const albums = result.albums;
            dispatch(action_received_albums(albums));
        },
        error:function(err,status){
            console.log(err);
        }
    })
};
const ajax_create_albums = album => dispatch => {
    dispatch(action_add_album(album));
    $.ajax({
        url:"/api/albums",
        method:"post",
        type:"json",
        data:album,
        success:function(result){
            const album = result.album||{};
            dispatch(action_received_add_album(album));
        },
        error:function(err,status){
            console.log(err);
        }
    })
};
export const fetch_ajax_create_albums = album => (dispatch,getState) => {
    dispatch(ajax_create_albums(album));
};
export const fetch_ajax_get_albums = albums => (dispatch,getState) => {
    dispatch(ajax_get_albums(albums));
};