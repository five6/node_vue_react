import React from 'react';
import redux from 'redux';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Topicdetail from '../components/topic/Topicdetail';
import {fetch_topicDetail_if_need} from '../actions/topic';

class TopicApp extends React.Component{
	constructor(props) {
		super(props);
		const locations = window.location.href.split("/");
		const topicId = locations[locations.length-1];
		this.props.dispatch(fetch_topicDetail_if_need(topicId));
		this.state = {topicId:topicId}
	}
	componentDidMount() {
	}
	render(){
		return(
			<Topicdetail topicId={this.state.topicId} topic={this.props.topic}/>
		)
	}
}

function mapStateToProps(state) {
  return {
  	topic:state.topic
  }
}
export default connect(
 mapStateToProps
)(TopicApp)