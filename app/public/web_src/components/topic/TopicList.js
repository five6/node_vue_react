import React from 'react';
import PropTypes from 'prop-types';
import { Provider,connect } from 'react-redux';
import { fetch_topics_if_need,fetch_topic_detail_if_need,for_delete_topic,action_received_topic_list } from '../../actions/topic';
class TopicList extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			data:[]
		};
        this.fetch=_.debounce(this._fetch,1000);
	}
	componentDidMount() {
		console.log("aaa");
		const {fetch_topics_if_need} = this.props;
		fetch_topics_if_need();
		console.log("bbb");
	}
	_fetch(){
		console.log("fetch data ");
	}
	render(){
		return(
			<div className="ui tab attached" data-tab="topics-list">
				<table className="ui celled table">
					<thead>
						<tr>
							<td>类型</td>
							<td>标题</td>
							<td>内容</td>
							<td>查看</td>
							<td>回复</td>
							<td>操作</td>
						</tr>
					</thead>
					<tbody>
					{
						this.state.data.map((item,key) =>{
							<tr key={key}>
								<td>{item.tab}</td>
								<td>{item.title}</td>
								<td>{item.content}</td>
								<td>{item.click}</td>
								<td>{item.replay}</td>
								<td><button className="button ui">删除</button><button className="button ui">详情</button></td>
							</tr>
						})
					}
					</tbody>
				</table>
			</div>
		)
	}
};


const TopicListContainer =({fetch_topics_if_need,fetch_topic_detail_if_need,for_delete_topic,action_received_topic_list}) => (
	<TopicList 
		fetch_topics_if_need={() => fetch_topics_if_need()}
		fetch_topic_detail_if_need ={(topicId) => fetch_topic_detail_if_need(topicId)}
		for_delete_topic ={(topicId)=> for_delete_topic(topicId)} 
	></TopicList>
	)

const mapStateToProps = state => ({
  topics: state.topics
})


export default connect(
  mapStateToProps,
  { fetch_topics_if_need, fetch_topic_detail_if_need,for_delete_topic}
)(TopicListContainer)

