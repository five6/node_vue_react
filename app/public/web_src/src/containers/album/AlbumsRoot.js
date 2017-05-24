import React from 'react';
import {Provider} from 'react-redux';
import AlbumApp from './Albums';
import store from '../../reducers/album';

export default class AlbumsRoot extends React.Component{
    render(){
        return(
            <Provider store={store} >
                <AlbumApp />
            </Provider>
        )
    }
}