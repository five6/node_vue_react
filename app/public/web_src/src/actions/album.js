import * as types  from '../constants/ActionTypes.album';
import axios from 'axios';
import _ from 'lodash';
export function action_get_albums(albums) {
    return {
        type:types.F_ALBUMS,
        albums:albums
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

export function action_add_photo(albumId,photos) {
    return{
        type:types.ADD_PHOTO,
        albumId,
        photos
    }
}
export function action_received_add_photo(albumId,photos) {
    return{
        type:types.R_ADD_PHOTO,
        albumId,
        photos
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
export function action_change_current_page(albumId,currentPage) {
    return{
        type:types.CHANGE_CURRENT_PAGE,
        albumId:albumId,
        currentPage:currentPage
    }
}
export function action_get_one_album(albumId) {
    return{
        type:types.F_ALBUM,
        albumId
    }
}
export function action_received_one_album(album) {
    return{
        type:types.F_ALBUM,
        album
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
        error:function(e5Fdxrr,status){
            console.log(err);
        }
    })
};

const ajax_upload_photos = (albumId,photos) => dispatch => {
    dispatch(action_add_photo(albumId,photos));
    var formData = new FormData();
    formData.append("albumId",albumId);
    let photoList = [];
    _.map(photos,function(ph){
         formData.append('file',ph.file);
    });
    axios.post("/api/albums/"+albumId+"/photos",formData,{ emulateJSON: true}).then((result) => {
    const album = result.album||{};
        dispatch(action_received_add_photo(albumId,photos));
    }, (err) => {
        console.log(err)
    });
};

const ajax_get_one_album =(albumId) => dispatch => {
    dispatch(action_get_one_album(albumId));
    axios.get("/api/albums/"+albumId)
    .then(function (resonse) {
        dispatch(action_received_one_album(resonse));
    }).catch(function (err) {
      console.log(err);
    });
};

export const fetch_ajax_create_albums = album => (dispatch,getState) => {
    dispatch(ajax_create_albums(album));
};
export const fetch_ajax_get_albums = albums => (dispatch,getState) => {
    dispatch(ajax_get_albums(albums));
};
export const fetch_ajax_uploadPhotos = (albumId,photos) => (dispatch,getstate) => {
    dispatch(ajax_upload_photos(albumId,photos));
};
export const change_current_page = (albumId,currentPage) => (dispatch,getstate) => {
    dispatch(action_change_current_page(albumId,currentPage));
};
export const fetch_ajax_get_one_album = (albumId) => (dispatch,getstate) => {
    dispatch(ajax_get_one_album(albumId));
};
