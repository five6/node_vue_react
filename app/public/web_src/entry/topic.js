import React from 'react';
import ReactDOM from 'react-dom';
import {connect,Provider} from 'react-redux';
import Root from '../containers/Root';

const nodeDiv =document.getElementById("topic-container");
ReactDOM.render(
    <Root />,
    nodeDiv
);
