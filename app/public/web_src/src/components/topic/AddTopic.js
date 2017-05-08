import React from 'react';
import PropTypes from 'prop-types'
import { Provider,connect } from 'react-redux'
import { fetch_add_topc_if_need} from '../../actions/topic'
export default class AddTopic extends React.Component {
	constructor(props){
		super(props);
		this.onSumit = this.onSumit.bind(this);
	}
	onSumit(){
		const tab = document.querySelector("#topic-create-tab").value;
		const title = document.querySelector("#topic-create-title").value;
		const content = document.querySelector("#topic-create-content").value;
		const topic = {
			tab:tab,
			title:title,
			content:content
		}
		this.props.addTopic(topic);
	}
	render(){
		const {topic}  = this.props;
		return(
		   <div className="ui tab attached" data-tab="topics-create">
	            <div className="form ui">
	             <form>
	             		<div className="field">
	                        <label>类型</label>
	                        <div className="ui left icon input">
	                        	<select id="topic-create-tab" value={topic.tab}>
	                        		<option value="share">分享</option>
	                        		<option value="ask">问答</option>
	                        		<option value="job">招聘</option>
	                        	</select>
	                        </div>
	                    </div>
	             		<div className="field">
	                        <label>标题</label>
	                        <div className="ui left icon input">
	                        	<input id="topic-create-title"  value={topic.title} />
	                        </div>
	                    </div>
	                    <div className="field">
	                        <label>内容</label>
	                        <div className="ui left icon input">
	                        	<textarea id="topic-create-content"  value={topic.content}></textarea>
	                        </div>
	                    </div>
	                    <button type="button" onClick={this.onSumit} className="ui primary button">发表</button>
	                </form>
	              </div>
	        </div>
		)
	}
};