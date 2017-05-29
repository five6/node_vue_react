import React from 'react';
import {findAlbums} from  '../../actions/album';
import Album from './Album';
import _ from 'lodash';

export default class Albums extends React.Component{
	constructor(props) {
		super(props);
		this.showCreateAlbumModal = this.showCreateAlbumModal.bind(this);
		this.onclickCreateAlbum = this.onclickCreateAlbum.bind(this);
		this.showUpdatePhotosModal = this.showUpdatePhotosModal.bind(this);
		this.onclickUpdatePhotos = this.onclickUpdatePhotos.bind(this);
		this.createDate = this.createDate.bind(this);
		this.onClickAddPhoto = this.onClickAddPhoto.bind(this);
		this.previewPhoto = this.previewPhoto.bind(this);
		this.setUniqueKey = this.setUniqueKey.bind(this);
		this.removeSelectedPhoto = this.removeSelectedPhoto.bind(this);
		this.onmouseoutPhoto = this.onmouseoutPhoto.bind(this);
		this.onmouseoverPhoto = this.onmouseoverPhoto.bind(this);
		this.state = {
            needUploadPhotos:[],
            needUploadPhotosNames:[]
		}
	}
    onUpdatePhotoInputChange(e){
	    let oldValues = this.state.needUploadPhotos;
        let newValues = e.target.files;
        newValues =_.filter(newValues,function (nw) {
            const file = _.find(oldValues,function (ow) {
                return ow.file === nw.file;
            });
            if(file){
                return false;
            }else{
                return true;
            }
        });
	    let names = [];
	    let files =[];
	    const self = this;
	    _.each(newValues,function (v) {
            const url = self.previewPhoto(v);
            const key = self.setUniqueKey(false,32);
            files.push({
                file:v,
                key:key
            });
            names.push({
                url:url,
                key:key
            });
        });
	    this.setState({
            needUploadPhotos:self.state.needUploadPhotos.concat(files),
            needUploadPhotosNames:self.state.needUploadPhotosNames.concat(names)
        });
	    console.log(this.state.needUploadPhotos);
    }
    setUniqueKey(randomFlag, min, max){
        var str = "",
            pos =0,
            range = min,
            arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        // 随机产生
        if(randomFlag){
            range = Math.round(Math.random() * (max-min)) + min;
        }
        for(var i=0; i<range; i++){
            pos = Math.round(Math.random() * (arr.length-1));
            str += arr[pos];
        }
        return str;
    }
    showCreateAlbumModal(){
        $('.albumAuthority').dropdown();
        $('.ui.radio.albumTopic').checkbox();
        $('.createAlbumModal').modal('show');
    }
    showUpdatePhotosModal(){

        //$('.selectAlbum').dropdown();
        $(".updatePhotosModal").modal('show');

    }
    onClickAddPhoto(){
        $("#inputAddPhoto").trigger("click");
    }
    onclickUpdatePhotos(element){
        const photos = this.state.needUploadPhotos;
        const albumId = this.refs.selectAlbum.value;
        if(!albumId || !photos.length){
            return;
        }
        this.props.uploadPhotos(albumId,photos);
    }
    onmouseoverPhoto(e){
        if(e.target)
        $(e.target).next().addClass("remove-photo-span-in");
    }
    onmouseoutPhoto(e){
        $(e.target).next().removeClass("remove-photo-span-in");

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
    previewPhoto(file){
        var url = null;
        if (window.createObjectURL != undefined) {
            url = window.createObjectURL(file)
        } else if (window.URL != undefined) {
            url = window.URL.createObjectURL(file)
        } else if (window.webkitURL != undefined) {
            url = window.webkitURL.createObjectURL(file)
        }
        return url
    }
    removeSelectedPhoto(e){
        const key = e.target.getAttribute("data-photo-key");
        let photos = this.state.needUploadPhotos;
        let names  = this.state.needUploadPhotosNames;
        photos =_.filter(photos,function (photo) {
           return photo.key !== key;
        });
        names =_.filter(names,function (name) {
            return name.key !== key;
        });
        this.setState({
            needUploadPhotos:photos,
            needUploadPhotosNames:names
        })
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
                                <img src="../public/images/bg.png"/>
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
                                        <select defaultValue={firstAlbum._id} className="ui selectAlbum" ref="selectAlbum">
                                            {albums.map(album =>
                                                <option value={album._id} key={album._id}>{album.name}</option>
                                            )}
                                        </select>
                                    </div>
                                    <div className="field">
                                        <label></label>
                                        <div className="ui left">
                                            <div className="ui tiny images">
                                                {
                                                    this.state.needUploadPhotosNames.map ((photo) =>
                                                        <div key={photo.key} className="ui image uploadPhoto-preview-img">
                                                            <img className="ui image" src={photo.url}  />
                                                            <span data-photo-key={photo.key}  onClick={(e)=>this.removeSelectedPhoto(e)} className="remove-photo-span" >X</span>
                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label></label>
                                        <div className="ui left icon input">
                                            <div>
                                                <input type="file" onChange={(e)=> this.onUpdatePhotoInputChange(e)}  accept="image/*"  className="input-addPhoto" id="inputAddPhoto" multiple />
                                                <button type="button" className="ui green button" onClick={this.onClickAddPhoto}>添加照片<i className="upload icon"></i></button>
                                            </div>
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
