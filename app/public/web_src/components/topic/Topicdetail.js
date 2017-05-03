import React from 'react';	
import PropTypes from 'prop-types';
import { Provider,connect } from 'react-redux';

import { Card, WhiteSpace } from 'antd-mobile';
export default class TopicDetail extends React.Component{
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		
	}
	render() {
		return(
			<div clssName="ui tab attached" data-tab="topics-topic">
				 <WhiteSpace size="lg" />
			    <Card full>
			      <Card.Header
			        title="This is title"
			        thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
			        extra={<span>this is extra</span>}
			      />
			      <Card.Body>
			        <div>This is content of `Card`</div>
			      </Card.Body>
			      <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
			    </Card>
			</div>
		)
	}
}