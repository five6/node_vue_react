import React from 'react';
import PropTypes from 'prop-types';
import {Provider,connect} from 'react-redux';
import {findAlbums} from  '../../actions/album';
import Album from './Album';

export default class Albums extends React.Component{
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		
	}
	render(){

		const {albums} = this.props;
		return(
			<div className="albums">
				{
					albums.map(album,index =>{
						<Album  photos={album.photos}>
					})
				}

			</div>
		)
	}
}
