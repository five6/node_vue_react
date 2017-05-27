import React from 'react';
import {findAlbums} from  '../../actions/album';
import Album from './Album';

export default class Albums extends React.Component{
	constructor(props) {
		super(props);
		this.showCreateAlbumModal = this.showCreateAlbumModal.bind(this);
		this.onclickCreateAlbum = this.onclickCreateAlbum.bind(this);
		this.showUpdatePhotosModal = this.showUpdatePhotosModal.bind(this);
		this.onclickUpdatePhotos = this.onclickUpdatePhotos.bind(this);
		this.createDate = this.createDate.bind(this);
		this.onClickAddPhoto = this.onClickAddPhoto.bind(this);
	}

    showCreateAlbumModal(){
        $('.albumAuthority').dropdown();
        $('.ui.radio.albumTopic').checkbox();
        $('.createAlbumModal').modal('show');
    }
    showUpdatePhotosModal(){

        $('.selectAlbum').dropdown();
        $(".updatePhotosModal").modal('show');

    }
    onClickAddPhoto(){
        $("#inputAddPhoto").trigger("click");
    }
    onclickUpdatePhotos(element){
        alert("唉， 可惜，功能还没完成呢！");
    }
    onclickCreateAlbum(element){
        const name = this.refs.preAlbumName.value;
        const description = this.refs.preAlbumDescription.value;
        const topic = $(this.refs.preAlbumTopic).find("input[type='radio']:checked").val();
        const authority = this.refs.albumAuthority.value;
        const album = {
            name:name,
            description:description,
            authority:authority,
            topic:topic
        };
        this.props.createAlbum(album);
        $('.createAlbumModal').modal('hide');
    }
	componentDidMount() {
         $('#createAlbumform').form({
          fields: {
            albumName : 'empty',
            albumDescription : 'empty',
            topic : 'empty',
            albumAuthority : 'empty'
        }   
     });
    }
    createDate(date){
        return moment(date).format("YYYY年MM月DD日 HH:mm:ss");
    }
	render(){
		const {albums} = this.props;
		const firstAlbum = albums[0]||{};
		return(
			<div className="ui">
                <div className="toolbar">
                    <div className="ui buttons">
                        <button onClick={(e)=> this.showUpdatePhotosModal(e)} className="ui red basic button">上传照片</button>
                        <button onClick={(e)=> this.showCreateAlbumModal(e)} className="ui green basic button">创建相册</button>
                    </div>
                </div>
                <div className="albums" id="albums-albums">
                    <div className="ui cards">
                    {albums.map(album =>
                        <div className="card" key={album._id}>
                            <div className="image">
                                <img src="http://www.semantic-ui.cn/images/wireframe/image.png"/>
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
                <div className="ui modal createAlbumModal">
                    <div className="header">创建相册</div>
                    <div className="content">
                        <div id="createAlbumform">
                              <form  action="/api/albums" method="post">
                                 <div className="ui form">
                                    <div className="field">
                                        <label>相册名称</label>
                                        <div className="ui left icon input">
                                            <input type="text" ref="preAlbumName"  name="albumName" maxLength="30" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label>相册描述</label>
                                        <div className="ui left icon input">
                                            <textarea ref="preAlbumDescription" name="albumDescription" maxLength="2000" rows="5" cols="8" placeholder="非必填"></textarea>
                                        </div>
                                    </div>
                                    <div className="inline fields" ref="preAlbumTopic">
                                        <label htmlFor="topic">主题</label>
                                        <div className="field">
                                            <div className="ui radio checkbox albumTopic">
                                                <input type="radio"   name="topic" value="0" defaultChecked tabIndex="0" className="hidden"/>
                                                    <label>普通</label>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <div className="ui radio checkbox albumTopic">
                                                <input type="radio" name="topic" value="1"  tabIndex="0" className="hidden"/>
                                                    <label>亲子</label>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <div className="ui radio checkbox albumTopic">
                                                <input type="radio"  name="topic" value="2" tabIndex="0" className="hidden" />
                                                    <label>旅游</label>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <div className="ui radio checkbox albumTopic">
                                                <input type="radio" name="topic" value="3" tabIndex="0" className="hidden" />
                                                    <label>校友</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label>权限</label>
                                        <div className="ui albumAuthority selection dropdown">
                                            <input type="hidden" name="albumAuthority" ref="albumAuthority"/>
                                            <i className="dropdown icon"></i>
                                            <div className="default text">所有人可见</div>
                                            <div className="menu">
                                                <div className="item" data-value="0">所有人可见</div>
                                                <div className="item" data-value="1">朋友可见</div>
                                                <div className="item" data-value="2">仅自己可见</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="actions">
                        <div onClick={(e) => this.onclickCreateAlbum(e)} className="ui blue button">确定</div>
                        <div className="ui cancel grey button">取消</div>
                    </div>
                </div>
                <div className="ui modal updatePhotosModal fullscreen">
                    <div className="header">上传照片</div>
                    <div className="content">
                        <div id="updatePhotosform">
                            <form  action="/api/albums" method="post" encType="multipart/form-data">
                                <div className="ui form">
                                    <div className="field">
                                        <label>上传到</label>
                                        <div className="ui selectAlbum selection dropdown">
                                            <i className="dropdown icon"></i>
                                            < div className = "default text" >{firstAlbum.name||""}</div>
                                                <div className="menu">
                                                    {albums.map(album =>
                                                        <div key={album._id} className="item" data-value={album._id}>{album.name}</div>
                                                    )};
                                                </div>
                                            </div>
                                    </div>
                                    <div className="field">
                                        <label></label>
                                        <div className="ui left icon input">
                                            <input type="file" className="input-addPhoto" id="inputAddPhoto" />
                                            <button type="button" className="ui green button" onClick={this.onClickAddPhoto}>添加照片<i className="upload icon"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="actions">
                        <div onClick={(e) => this.onclickUpdatePhotos(e)} className="ui blue button">确定</div>
                        <div className="ui cancel grey button">取消</div>
                    </div>
                </div>
            </div>
		)
	}
}
