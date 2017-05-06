import React from 'react';
import redux from 'redux';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AddTopic from '../components/topic/AddTopic';
import TopicList  from '../components/topic/TopicList';
import Topicdetail from '../components/topic/Topicdetail';
import {fetch_topics_if_need} from '../actions/topic';


class TopicsApp extends React.Component {
	constructor(props) {
		super(props);
	 	this.props.dispatch(fetch_topics_if_need(this.props.topics));
	 	this.deleteTopic = this.deleteTopic.bind(this);
	}
	deleteTopic(id){
		this.props.dispatch(fetch_topics_if_need(id));
	}
	componentDidMount() {
		$('#topics-tab .item').tab();
	}
	componentDidUpdate(prevProps, prevState) {
	}
	componentWillReceiveProps(nextProps) {
		console.log("componentWillReceiveProps")
	}
	render(){
		return(
			<div className="ui content">
			 	<div className="ui top attached tabular menu" id="topics-tab" style={{marginBottom: 2 +'em'}}>
			        <a className="item active"  data-tab="topics-list">主题列表</a>
			        <a className="item"  data-tab="topics-create">新建主题</a>
			    </div>
		  	<TopicList deleteTopic={this.deleteTopic}  topics={this.props.topics} /> 
		    <AddTopic />
		</div>
		)
	}
}

TopicsApp.propTypes = {
  topics: PropTypes.array.isRequired
}


function mapStateToProps(state) {
  return {
  	topics:state.topics
  }
}
export default connect(
 mapStateToProps
)(TopicsApp)
