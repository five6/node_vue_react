import React from 'react';
import Album from './Album';
import _ from 'lodash';
import {change_current_page} from '../../actions/album';
export default class Albums extends React.Component{
	constructor(props) {
		super(props);
		this.createDate = this.createDate.bind(this);
		this.onClickChangeCurrentPage = this.onClickChangeCurrentPage.bind(this);
        this.onAlbumsMenuSelect = this.onAlbumsMenuSelect.bind(this);
        this.onAlbumBackgroundChange = this.onAlbumBackgroundChange.bind(this);
        this.previewPhoto = this.previewPhoto.bind(this);
        this.showBackground = this.showBackground.bind(this);
        this.state ={
            multiple:false,
            albumId:""
        };
    }
	componentDidMount() {
        $(".albums_menus").dropdown();
    }
    createDate(date){
        return moment(date).format("YYYY年MM月DD日 HH:mm:ss");
    }
    onClickChangeCurrentPage(element){
        const albumId = element.target.getAttribute("data-albumId");
    	this.props.changeCurrentPage(albumId,"album");
	}
    onAlbumsMenuSelect(e){
        e.preventDefault();
        const albumId = e.target.getAttribute("data-albumId");
        const value =  e.target.value;
        this.setState({
            albumId:albumId
        })
        if(value === "bk"){
            $('.editAlbumBackgroundModal').modal('show');
        }else if(value === "de"){
            this.props.deleteAlbum(albumId);
        }
    }
    onAlbumBackgroundChange(e){
        const file = e.target.files[0];
        if(file){
            this.setState({
                imgSrc:this.previewPhoto(file),
                backgroundImg:file
            });
        }
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
    onUploadAlbumBK(){
        $(".input-file-album-bk").trigger("click");
    }
    onCommitSetAlbumBackground(){
        const bk = this.state.backgroundImg;
        this.props.setAlbumBackground(this.state.albumId,bk);
        $('.editAlbumBackgroundModal').modal('hide');
    }
    showBackground(album){
        var result ="../public/images/bg.png";
        if(album.preview){
            result = "/public/ufiles/photos/"+album.preview;
        }
        return result;
    }
	render(){
		const {albums} = this.props;
		return(
			<div className="ui">
                <div className="albums" id="albums-albums">
                    <div className="ui cards">
                    {albums.map(album =>
                        <div className="card" key={album._id}>
                            <select onChange={(e)=> this.onAlbumsMenuSelect(e)} className="ui dropdown albums_menus" data-albumId={album._id}>
                              <option value="">操作</option>
                              <option value="bk">设置封面</option>
                              <option value="de">删除相册</option>
                            </select>
                            <div className="image">
                                <img src={this.showBackground(album)} data-albumId={album._id} onClick={(e) => this.onClickChangeCurrentPage(e)} />
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
                <div className="ui modal editAlbumBackgroundModal">
                    <div className="header">上传照片</div>
                    <div className="content">
                        <div id="uploadAlbumBackgroundDiv">
                            <form method="post" encType="multipart/form-data">
                                <div className="field">
                                    <label></label>
                                    <div className="ui left icon input">
                                        <div>
                                            <input type="file" className="input-file-album-bk" onChange={(e)=> this.onAlbumBackgroundChange(e)}  accept="image/*"  multiple={this.state.multiple} />
                                            <button type="button" className="ui green button" onClick={this.onUploadAlbumBK}>选择照片<i className="upload icon"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="field">
                                    <label></label>
                                    <div className="ui left icon input">
                                        <div>
                                            <img className="ui image album-background-preview" src={this.state.imgSrc}  />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="actions">
                        <div onClick={(e) => this.onCommitSetAlbumBackground(e)} className="ui blue button">确定</div>
                        <div className="ui cancel grey button">取消</div>
                    </div>
                </div>
            </div>
		)
	}
}
