import * as types from '../constants/actionTypes.album';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger}  from 'redux-logger';
import 	_ from 'lodash';
const initState = {
  albums:[]
};

function albumReducer(state = initState,action) {
    switch (action.type){
        case types.F_ALBUMS:
            break;
        case types.R_ALBUMS:
            break;
            
            
        case types.F_ALBUM:
            break;
        case types.R_ALBUM:
            break;
            
            
        case types.ADD_ALBUM:
            console.log("添加相册！")
            return Object.assign({},state,{
                album:action.album
            });
            break;
        case types.R_ADD_ALBUM:
            console.log("成功添加相册！")
            return Object.assign({},state,{
                album:action.album
            });
            break;
        case types.DEL_ALBUM:
            break;
        case types.R_DEL_ALBUM:
            break;
            
            
        case types.ADD_PHOTO:
            break;
        case types.R_ADD_PHOTO:
            break;
            
            
        case types.DEL_PHOTO:
            break;
        case types.R_DEL_PHOTO:
            break;
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