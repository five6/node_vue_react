import React from 'react';

export default class TopicList extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			data:[]
		};
        this.fetch=_.debounce(this._fetch,1000);
	}
	componentDidMount() {
		this.fetch();
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