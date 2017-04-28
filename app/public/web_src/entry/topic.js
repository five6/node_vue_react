import React from 'react';
import ReactDOM from 'react-dom';
import {connect,Provider} from 'react-redux';
import Topic from '../components/topic/topic';
import store from '../reducers/topic';

const nodeDiv =document.getElementById("topic-container");
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TopicActions, dispatch)
})


const AppData = connect(null, {})(Topic);
ReactDOM.render((
    <Provider store={store}>
        <AppData />
    </Provider>
),nodeDiv)