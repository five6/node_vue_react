import React from 'react';
import Album from './Album';
import _ from 'lodash';
import {change_current_page} from '../../actions/album';
export default class Albums extends React.Component{
	constructor(props) {
		super(props);
		this.createDate = this.createDate.bind(this);
		this.onClickChangeCurrentPage = this.onClickChangeCurrentPage.bind(this);
	}
	componentDidMount() {
        //  $('#createAlbumform').form({
        //   fields: {
        //     albumName : 'empty',
        //     albumDescription : 'empty',
        //     topic : 'empty',
        //     albumAuthority : 'empty'
        // }
     // });
    }
    createDate(date){
        return moment(date).format("YYYY年MM月DD日 HH:mm:ss");
    }
    onClickChangeCurrentPage(element){
        const albumId = element.target.getAttribute("data-albumId");
    	this.props.changeCurrentPage(albumId,"album");
	}
	render(){
		const {albums} = this.props;
		return(
			<div className="ui">
                <div className="albums" id="albums-albums">
                    <div className="ui cards">
                    {albums.map(album =>
                        <div className="card" key={album._id}>
                            <div className="image">
                                <img src="../public/images/bg.png" data-albumId={album._id} onClick={(e) => this.onClickChangeCurrentPage(e)} />
                            </div>
                            <div className="content">
                                <a className="header">{album.name}</a>
                                <div className="meta">
                                    <span className="date">{this.createDate(album.create_at)}</span>
                                </div>
                                <div className="description">{album.description}</div>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
            </div>
		)
	}
}
