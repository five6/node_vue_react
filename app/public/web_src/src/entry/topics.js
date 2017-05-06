import React from 'react';
import ReactDOM from 'react-dom';
import {connect,Provider} from 'react-redux';
import TopicsRoot from '../containers/TopicsRoot';

const nodeDiv =document.getElementById("topic-container");
ReactDOM.render(
    <TopicsRoot />,
    nodeDiv
);
