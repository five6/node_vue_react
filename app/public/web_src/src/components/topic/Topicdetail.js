import React from 'react';	
import PropTypes from 'prop-types';
import { Provider,connect } from 'react-redux';

import { Card, WhiteSpace } from 'antd-mobile';
export default class TopicDetail extends React.Component{
	constructor(props) {
		super(props);
		this.replaceContent = this.replaceContent.bind(this);
	}
	componentDidMount() {
		
	}
	replaceContent(content){
		return {__html: content};
	}
	render() {
		const topic = this.props.topic || {};
		console.log(topic)
		return(
			<div className="ui content">
				<div className="ui piled segment">
					<h4 className="ui header">{topic.title}</h4>
					<p dangerouslySetInnerHTML={{__html: topic.content}} />
				</div>
			</div>
		)
	}
}