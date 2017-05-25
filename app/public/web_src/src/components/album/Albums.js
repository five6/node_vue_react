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
        $('.createAlbumModal').modal('show');
        $('.albumAuthority').dropdown();
        $('.ui.radio.albumTopic').checkbox();
        ;
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
                    <div className="header">创建相册</div>
                    <div className="content">
                        <div className="ui form">
                            <div className="field">
                                <label>相册名称</label>
                                <div className="ui left icon input">
                                    <input type="text" name="albumName" maxLength="30" placeholder="" />
                                </div>
                            </div>
                            <div className="field">
                                <label>相册描述</label>
                                <div className="ui left icon input">
                                    <textarea name="albumDescription" maxLength="2000" rows="5" cols="8" placeholder="非必填"></textarea>
                                </div>
                            </div>
                            <div className="inline fields">
                                <label htmlFor="topic">主题</label>
                                <div className="field">
                                    <div className="ui radio checkbox albumTopic">
                                        <input type="radio" name="topic" defaultChecked tabIndex="0" className="hidden"/>
                                            <label>普通</label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui radio checkbox albumTopic">
                                        <input type="radio" name="topic" tabIndex="0" className="hidden"/>
                                            <label>亲子</label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui radio checkbox albumTopic">
                                        <input type="radio" name="topic" tabIndex="0" className="hidden" />
                                            <label>旅游</label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui radio checkbox albumTopic">
                                        <input type="radio" name="topic" tabIndex="0" className="hidden" />
                                            <label>校友</label>
                                    </div>
                                </div>
                            </div>
                            <div className="field">
                                <label>权限</label>
                                <div className="ui albumAuthority selection dropdown">
                                    <input type="hidden" name="sex"/>
                                    <i className="dropdown icon"></i>
                                    <div className="default text">所有人可见</div>
                                    <div className="menu">
                                        <div className="item" data-value="1">所有人可见</div>
                                        <div className="item" data-value="2">朋友可见</div>
                                        <div className="item" data-value="3">仅自己可见</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="actions">
                        <div onClick={(e) => this.onclicCreateAlbum(e)} className="ui blue button">确定</div>
                        <div className="ui cancel grey button">取消</div>
                    </div>
                </div>
            </div>
		)
	}
}
