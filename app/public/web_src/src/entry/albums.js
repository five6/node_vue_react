import React from 'react';
import ReactDOM from 'react-dom';
import AlbumsRoot from '../containers/album/AlbumsRoot';

const nodeDiv =document.getElementById("album-container");
ReactDOM.render(
    <AlbumsRoot />,
    nodeDiv
);
