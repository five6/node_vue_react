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
            <div className="ui images">
				{
					(album.photos ? album.photos:[]).map(p =>
					<img className="ui image" key={p._id} src={'/public/ufiles/photos/'+p.path} />
				)}
			</div>

		)
	}
}