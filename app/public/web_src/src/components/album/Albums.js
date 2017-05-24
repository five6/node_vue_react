import React from 'react';
import {findAlbums} from  '../../actions/album';
import Album from './Album';

export default class Albums extends React.Component{
	constructor(props) {
		super(props);
		this.showCreateAlbumModal = this.showCreateAlbumModal.bind(this);
		this.onclicCreateAlbum = this.onclicCreateAlbum.bind(this);
	}

    showCreateAlbumModal(){
        $('.createAlbumModal').modal('show')
    }

    onclicCreateAlbum(e){
        alert(1)
    }

	componentDidMount() {
		
	}
	render(){

		const {albums} = this.props;
		return(
			<div className="ui">
                <div className="toolbar">
                    <div className="ui buttons">
                        <button className="ui red basic button">上传照片</button>
                        <button onClick={(e)=> this.showCreateAlbumModal(e)} className="ui green basic button">创建相册</button>
                    </div>
                </div>
                <div className="albums">
                    {
                        albums.map(album =>{
                            <Album  photos={album.photos} />
                        })
                    }
                
                </div>
                <div className="ui modal createAlbumModal">
                    <div className="header">Header</div>
                    <div className="content">
                        <p></p>
                    </div>
                    <div className="actions">
                        <div onClick={(e) => this.onclicCreateAlbum(e)} className="ui button">确定</div>
                        <div className="ui cancel button">Cancel</div>
                    </div>
                </div>
            </div>
		)
	}
}
