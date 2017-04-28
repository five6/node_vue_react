import React from 'react';
import redux from 'redux';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AddTopicContainer from './AddTopic';
import TopicListContainer  from './TopicList';
export default class Topic extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}
	componentWillMount() {
	}
	componentDidMount() {
		$('#topics-tab .item').tab();
	}
	render(){
		return(
			<div className="ui content">
			 	<div className="ui top attached tabular menu" id="topics-tab" style={{marginBottom: 2 +'em'}}>
	                <a className="item active"  data-tab="topics-list">主题列表</a>
	                <a className="item"  data-tab="topics-create">新建主题</a>
	            </div>
	            <TopicListContainer  />
	            <AddTopicContainer />
			</div>
		)
	}
}


