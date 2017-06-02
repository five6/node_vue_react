import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'antd-mobile';
import {fetch_ajax_get_one_album} from  '../../actions/album';
export default class Album extends React.Component{
	constructor(props) {
		super(props);
        const {albumId}= this.props;
        this.props.getOneAlbum(albumId);
	}
	componentDidMount() {
	
	}
	render(){
		const {album} = this.props;
		const photos = album.photos||[];
		return(
            <div>
                {
                    photos.map(photo=> {
						<div className="album">
							<div className="photo">
								<img src={photo.src}/>
							</div>
						</div>
					})
				}
			</div>

		)
	}
}