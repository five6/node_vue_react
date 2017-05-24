import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'antd-mobile';
export default class Album extends React.Component{
	constructor(props) {
		super(props);
	}
	componentDidMount() {
	
	}
	render(){
		const {photos} = this.props;
		return(
            <div>
                {
                    photos.map(photo=>{
						<div className="album">
							<div className="photo">
								<img src=""/>
							</div>
						</div>
					})
				}
			</div>

		)
	}
}