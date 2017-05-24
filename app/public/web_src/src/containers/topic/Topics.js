import React from 'react';
import redux from 'redux';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AddTopic from '../../components/topic/AddTopic';
import TopicList  from '../../components/topic/TopicList';
import Topicdetail from '../../components/topic/Topicdetail';
import {fetch_topics_if_need,fetch_delete_topic_if_need,fetch_add_topc_if_need,fetch_get_more_topc_if_need} from '../../actions/topic';


class TopicsApp extends React.Component {
	constructor(props) {
		super(props);
	 	this.props.dispatch(fetch_topics_if_need(this.props.topics));
	 	this.deleteTopic = this.deleteTopic.bind(this);
	 	this.addTopic = this.addTopic.bind(this);
	 	this.getMoreTopics = this.getMoreTopics.bind(this);
	}
	deleteTopic(id){
		this.props.dispatch(fetch_delete_topic_if_need(id));
	}
	addTopic(topic){
		this.props.dispatch(fetch_add_topc_if_need(topic));
	}
	getMoreTopics(topicId){
		this.props.dispatch(fetch_get_more_topc_if_need(topicId));
	}
	componentDidMount() {
	}
	componentDidUpdate(prevProps, prevState) {
    }
	componentWillReceiveProps(nextProps) {
	}
	render(){
		return(
			<div className="ui content">
		  		<TopicList deleteTopic={this.deleteTopic} getMoreTopics={this.getMoreTopics} totalCount={this.props.totalCount} topics={this.props.topics}  /> 
			</div>
		)
	}
}

TopicsApp.propTypes = {
  topics: PropTypes.array.isRequired,
  totalCount:PropTypes.number.isRequired
}


function mapStateToProps(state) {
  return {
  	totalCount:state.totalCount,
  	topics:state.topics,
  	topic:state.topic
  }
}
export default connect(
 mapStateToProps
)(TopicsApp)
