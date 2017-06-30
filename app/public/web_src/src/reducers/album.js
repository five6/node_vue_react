import * as types from '../constants/actionTypes.album';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger}  from 'redux-logger';
import _ from 'lodash';

const initState = {
    albums:[],
    album:{},
  currentPage:"albums"
};

function albumReducer(state = initState,action) {
    switch (action.type){
        case types.F_ALBUMS:
            return Object.assign({},state,{
                albums:action.albums
            });
            break;
        case types.R_ALBUMS:
            return Object.assign({},state,{
                albums:action.albums
            });
            break;
        case types.F_ALBUM:
            return Object.assign({},state,{
                albumId:action.albumId
            });
            break;
        case types.R_ALBUM:
            return Object.assign({},state,{
                album:action.album||{}
            });
            break;
        case types.ADD_ALBUM:
            console.log("添加相册！")
            return Object.assign({},state,{
                album:action.album
            });
            break;
        case types.R_ADD_ALBUM:
            console.log("成功添加相册！");
            return Object.assign({},state,{
                album:action.album,
                albums:state.albums.concat([action.album])
            });
            break;
        case types.DEL_ALBUM:
            return Object.assign({},state,{
                albumId:action.albumId,
            });
            break;
        case types.R_DEL_ALBUM:
            const albums =_.filter(state.albums,function (album) {
                return album._id !== action.albumId
            });
            return {
                albums:albums,
                currentPage:"albums"
            };
            break;
        case types.ADD_PHOTO:
            return Object.assign({},state,{
                albumId:action.albumId,
                photos:action.photos
            });
            break;
        case types.R_ADD_PHOTO:
            return Object.assign({},state,{
                albums:state.albums,
            });
            break;
        case types.DEL_PHOTO:
            break;
        case types.R_DEL_PHOTO:
            break;
        case types.CHANGE_CURRENT_PAGE:
            return Object.assign({},state,{
                currentPage:action.currentPage,
                albumId:action.albumId
            });
        case types.R_SET_ALBUM_BACKGROUND:
            return Object.assign({},state,{
                currentPage:state.currentPage,
                albumId:action.albumId,
                albums:_.map(state.albums,function (album) {
                    if(album._id === action.albumId){
                        album.preview = action.photo;
                    }
                    return album;
                })
            });
        default:
            return state;
    }
}
const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}
const store = createStore(
    albumReducer,
    applyMiddleware(...middleware)
);
export default store;