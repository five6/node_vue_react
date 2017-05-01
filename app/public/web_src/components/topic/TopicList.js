import React from 'react';	
import PropTypes from 'prop-types';
import { Provider,connect } from 'react-redux';
import { fetch_topics_if_need,action_received_topic_list } from '../../actions/topic';

export default class TopicList extends React.Component{
	constructor(props) {
		super(props);
		console.log(props);
		this.tab_cn = this.tab_cn.bind(this);
	}
	componentDidMount() {

	}
	componentWillReceiveProps(nextProps) {
		console.log("topicList")
		console.log(nextProps)
	}
	tab_cn(tab){
		if(tab =="ask"){
			return "问答";
		}else if(tab =="share"){
			return "分享";
		}else if(tab =="job"){
			return "招聘";
		}else{
			return "其他";
		}
	}
	render(){
		  const { topics } = this.props;
		  console.log(topics.length)
		return(
			<div className="ui tab attached" data-tab="topics-list">

				<table className="ui celled table">
					<thead>
						<tr>
							<td>ID</td>
							<td>类型</td>
							<td>标题</td>
							<td>查看</td>
							<td>回复</td>
							<td>操作</td>
						</tr>
					</thead>
					<tbody>
				      {topics.map(item =>
				        <tr key={item.id}>
				        	<td>{item.id}</td>
							<td>{this.tab_cn(item.tab)}</td>
							<td>{item.title}</td>
							<td>{item.visit_count}</td>
							<td>{item.reply_count}</td>
							<td>
								<button className="button ui">删除</button><button className="button ui">详情</button>
							</td>
						</tr>)}
					</tbody>
				</table>
			</div>
		)
	}
};
