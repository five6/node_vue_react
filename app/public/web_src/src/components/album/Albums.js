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
			<div>
                <div className="toolbar">
                    <div className="ui buttons">
                        <button className="ui red basic button">上传照片</button>
                        <button className="ui blue basic button">创建相册</button>
                    </div>
                </div>
                <div className="albums">
                    {
                        albums.map(album,index =>{
                            <Album  photos={album.photos} />
                        })
                    }
                
                </div>
            </div>
		)
	}
}
