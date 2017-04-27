import React from 'react';
export default class AddTopic extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			tab:"",
			title:"",
			content:""
		};
		this.onSumit = this.onSumit.bind(this);
	}
	onSumit(){

	}
	render(){
		return(
		   <div className="ui tab attached" data-tab="topics-create">
	            <div className="form ui">
	             <form>
	             		<div className="field">
	                        <label>类型</label>
	                        <div className="ui left icon input">
	                        	<input value={this.state.title} />
	                        </div>
	                    </div>
	             		<div className="field">
	                        <label>标题</label>
	                        <div className="ui left icon input">
	                        	<input value={this.state.title} />
	                        </div>
	                    </div>
	                    <div className="field">
	                        <label>内容</label>
	                        <div className="ui left icon input">
	                        	<textarea value={this.state.content}></textarea>
	                        </div>
	                    </div>
	                    <button type="button" onClick={this.onSubmit} className="ui primary button">发表</button>
	                </form>
	              </div>
	        </div>
		)
	}
};